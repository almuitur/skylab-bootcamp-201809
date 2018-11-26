const { Meal, Day, MealPlan, User } = require('../data')
const { AlreadyExistsError, AuthError, NotAllowedError, NotFoundError, ValueError } = require('../errors')
const validate = require('../utils/validate')
const fs = require('fs')
const path = require('path')

const logic = {
    registerUser(name, surname, username, password) {
        validate([{ key: 'name', value: name, type: String }, { key: 'surname', value: surname, type: String }, { key: 'username', value: username, type: String }, { key: 'password', value: password, type: String }])

        return (async () => {
            let user = await User.findOne({ username })

            if (user) throw new AlreadyExistsError(`username ${username} already registered`)

            user = new User({ name, surname, username, password })

            await user.save()
        })()
    },

    authenticateUser(username, password) {
        validate([{ key: 'username', value: username, type: String }, { key: 'password', value: password, type: String }])

        return (async () => {
            const user = await User.findOne({ username })

            if (!user || user.password !== password) throw new AuthError('invalid username or password')

            return user.id
        })()
    },

    retrieveUser(id) {
        validate([{ key: 'id', value: id, type: String }])

        return (async () => {
            const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()

            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.id = id

            return user
        })()
    },

    updateUser(id, name, surname, username, password, newPassword, confirmNewPassword) {
        validate([
            { key: 'id', value: id, type: String },
            { key: 'name', value: name, type: String, optional: true },
            { key: 'surname', value: surname, type: String, optional: true },
            { key: 'username', value: username, type: String, optional: true },
            { key: 'password', value: password, type: String },
            { key: 'newPassword', value: newPassword, type: String, optional: true },
            { key: 'confirmNewPassword', value: confirmNewPassword, type: String, optional: true },
        ])

        return (async () => {
            
            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            if (user.password !== password) throw new AuthError('invalid password')
            
            if (username) {
                const _user = await User.findOne({ username })

                if (_user) throw new AlreadyExistsError(`username ${username} already exists`)
               //Llega aqui, los datos llegan bien

                name != null && (user.name = name)
                surname != null && (user.surname = surname)
                user.username = username
                // if (newPassword!=null) {
                //     newPassword === confirmNewPassword ? user.password = newPassword : function () { throw new ValueError('new passwords do not match') }
                // }
                
                if (newPassword!=null) {
                    console.log('newpassword is not null')
                    if(newPassword === confirmNewPassword) {
                        console.log('compara passwords')
                        user.password = newPassword
                    }
                    else {
                        console.log('Not same pass!')
                    }
                }
                await user.save()
            } else {
                name != null && (user.name = name)
                surname != null && (user.surname = surname)
                newPassword != null && (user.password = newPassword)
            }
                await user.save()
        })()
    },

    // searchRandomMeal(category, subcategory, diet, isSpecial, isCold, intolerances, season) {
    searchRandomMeal(category, subcategory) {
        // validate([
            // { key: 'category', value: category, type: String },
            // { key: 'subcategory', value: subcategory, type: String, optional: true },
            // { key: 'diet', value: diet, type: String, optional: true },
            // { key: 'isSpecial', value: isSpecial, type: Boolean, optional: true },
            // { key: 'isCold', value: isCold, type: Boolean, optional: true},
            // { key: 'intolerances', value: intolerances, type: Array, optional: true },
            // { key: 'isLight', value: isLight, type: Boolean, optional: true },
            // { key: 'season', value: season, type: Array, optional: true },
        // ])
        
        return (async () => {
            const meals = await Meal.find({
                category: category,
                subcategory: (subcategory) ? subcategory : /.*/
                // diet: {$gte: diet},
                // isSpecial: (isSpecial)? isSpecial: /.*/,
                // isCold: (isCold)? isCold : /.*/,
                // intolerances: {$nin: intolerances},
                // isLight: (isLight)? isLight : /.*/,
                // season: {$in: season }
            })
            
            if (!meals) throw new NotFoundError('no meals')
            if(!meals.length) meals[0]= { name: 'Not found' }

        //     //TO CONSIDER
        //     // const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()
        //     // if (!user) throw new NotFoundError(`user with id ${id} not found`)
        //     // user.id = id
        //     //name != null && (user.name = name)

            const meal = meals[Math.floor(Math.random() * meals.length)]
            delete meal.__v
            delete meal._id
            
            return meal
        })()
    }

    // addCollaborator(id, collaboratorUsername) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'collaboratorUsername', value: collaboratorUsername, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const collaborator = await User.findOne({ username: collaboratorUsername })

    //         if (!collaborator) throw new NotFoundError(`user with username ${collaboratorUsername} not found`)

    //         if (user.id === collaborator.id) throw new NotAllowedError('user cannot add himself as a collaborator')

    //         user.collaborators.forEach(_collaboratorId => {
    //             if (_collaboratorId === collaborator.id) throw new AlreadyExistsError(`user with id ${id} arleady has collaborator with id ${_collaboratorId}`)
    //         })

    //         user.collaborators.push(collaborator._id)

    //         await user.save()
    //     })()
    // },

    // listCollaborators(id) {
    //     validate([
    //         { key: 'id', value: id, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const collaborators = await Promise.all(user.collaborators.map(async collaboratorId => await User.findById(collaboratorId)))

    //         return collaborators.map(({ id, username }) => ({ id, username }))
    //     })()
    // },

    // saveUserPhoto(id, file, filename) {
    //     const folder = `data/users/${id}`

    //     return new Promise((resolve, reject) => {
    //         try {
    //             if (!fs.existsSync(folder)) {
    //                 fs.mkdirSync(folder)
    //             } else {
    //                 const files = fs.readdirSync(folder)

    //                 files.forEach(file => fs.unlinkSync(path.join(folder, file)))
    //             }

    //             const pathToFile = path.join(folder, filename)

    //             const ws = fs.createWriteStream(pathToFile)

    //             file.pipe(ws)

    //             resolve()
    //         } catch (err) {
    //             reject(err)
    //         }
    //     })
    // },

    // retrieveUserPhoto(id) {
    //     const folder = `data/users/${id}`

    //     return new Promise((resolve, reject) => {
    //         try {
    //             let file

    //             if (!fs.existsSync(folder)) {
    //                 file = 'data/users/default/profile.png'
    //             } else {
    //                 const files = fs.readdirSync(folder)

    //                 file = `data/users/${id}/${files[0]}`
    //             }

    //             const rs = fs.createReadStream(file)

    //             resolve(rs)
    //         } catch (err) {
    //             reject(err)
    //         }
    //     })
    // },

    //ESTO SERA GENERATE MENU
    /**
     * Adds a postit
     * 
     * @param {string} id The user id
     * @param {string} text The postit text
     * 
     * @throws {TypeError} On non-string user id, or non-string postit text
     * @throws {Error} On empty or blank user id or postit text
     * 
     * @returns {Promise} Resolves on correct data, rejects on wrong user id
     */
    // addPostit(id, text) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'text', value: text, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const postit = new Postit({ text, user: user.id })

    //         await postit.save()
    //     })()
    // },

    // saveMenu(userId, menu) {
    //     validate([
    //         { key: 'userId', value: id, type: String },
    //         // { key: 'text', value: text, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const Menu = new Menu({ text, user: user.id })

    //         await menu.save()
    //     })()
    // },

    //ESTO SERA VER MENU AL CLICKAR EN UN SAVED MENU
    // listPostits(id) {
        // validate([
        //     { key: 'id', value: id, type: String }
        // ])

        // return (async () => {
        //     const user = await User.findById(id).lean()

        //     if (!user) throw new NotFoundError(`user with id ${id} not found`)

        //     const postits = await Postit.find({ $or: [{ user: user._id }, { assignedTo: user._id }] })
        //         .lean()

        //     postits.forEach(postit => {
        //         postit.id = postit._id.toString()

        //         delete postit._id

        //         postit.user = postit.user.toString()

        //         if (postit.assignedTo)
        //             postit.assignedTo = postit.assignedTo.toString()

        //         return postit
        //     })

        //     return postits
        // })()

    //     if (typeof id !== 'string') throw TypeError(`${id} is not a string`)

    //     if (!id.trim().length) throw new ValueError('id is empty or blank')

    //     return User.findById(id)
    //         .lean()
    //         .then(user => {
    //             if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //             // return user.postits.map(({ _id, text }) => { id: _id.toString(), text })
    //             return user.postits.map(postit => {
    //                 postit.id = postit._id.toString()

    //                 delete postit._id

    //                 return postit
    //             })
    //         })
    // },

    /**
     * Removes a postit
     * 
     * @param {string} id The user id
     * @param {string} postitId The postit id
     * 
     * @throws {TypeError} On non-string user id, or non-string postit id
     * @throws {Error} On empty or blank user id or postit text
     * 
     * @returns {Promise} Resolves on correct data, rejects on wrong user id, or postit id
     */
    // removePostit(id, postitId) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'postitId', value: postitId, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const postit = await Postit.findOne({ user: user._id, _id: postitId })

    //         if (!postit) throw new NotFoundError(`postit with id ${postitId} not found`)

    //         await postit.remove()
    //     })()
    // },

    // removePostit(id, postitId) {
    //     if (typeof id !== 'string') throw TypeError(`${id} is not a string`)

    //     if (!id.trim().length) throw new ValueError('id is empty or blank')

    //     if (typeof postitId !== 'string') throw TypeError(`${postitId} is not a string`)

    //     if (!postitId.trim().length) throw new ValueError('postit id is empty or blank')

    //     return User.findById(id)
    //         .then(user => {
    //             if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //             const { postits } = user

    //             const index = postits.findIndex(postit => postit.id === postitId)

    //             if (index < 0) throw new NotFoundError(`postit with id ${postitId} not found in user with id ${id}`)

    //             postits.splice(index, 1)

    //             return user.save()
    //         })
    // },

    // modifyPostit(id, postitId, text) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'postitId', value: postitId, type: String },
    //         { key: 'text', value: text, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const postit = await Postit.findOne({ user: user._id, _id: postitId })

    //         if (!postit) throw new NotFoundError(`postit with id ${postitId} not found`)

    //         postit.text = text

    //         await postit.save()
    //     })()
    // },

    // modifyPostit(id, postitId, text) {
    //     if (typeof id !== 'string') throw TypeError(`${id} is not a string`)

    //     if (!id.trim().length) throw new ValueError('id is empty or blank')

    //     if (typeof postitId !== 'string') throw TypeError(`${postitId} is not a string`)

    //     if (!postitId.trim().length) throw new ValueError('postit id is empty or blank')

    //     if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //     if (!text.trim().length) throw new ValueError('text is empty or blank')

    //     return User.findById(id)
    //         .then(user => {
    //             if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //             const { postits } = user

    //             const postit = postits.find(postit => postit.id === postitId)

    //             if (!postit) throw new NotFoundError(`postit with id ${postitId} not found in user with id ${id}`)

    //             postit.text = text

    //             return user.save()
    //         })
    // },

    // movePostit(id, postitId, status) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'postitId', value: postitId, type: String },
    //         { key: 'status', value: status, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const postit = await Postit.findOne({ user: user._id, _id: postitId })

    //         if (!postit) throw new NotFoundError(`postit with id ${postitId} not found`)

    //         postit.status = status

    //         await postit.save()
    //     })()
    // },

    // assignPostit(id, postitId, collaboratorId) {
    //     validate([
    //         { key: 'id', value: id, type: String },
    //         { key: 'postitId', value: postitId, type: String },
    //         { key: 'collaboratorId', value: collaboratorId, type: String }
    //     ])

    //     return (async () => {
    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         const postit = await Postit.findOne({ user: user._id, _id: postitId })

    //         if (!postit) throw new NotFoundError(`postit with id ${postitId} not found`)

    //         postit.assignedTo = collaboratorId

    //         await postit.save()
    //     })()
    // }
}

module.exports = logic