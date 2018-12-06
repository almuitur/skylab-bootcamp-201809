const { models: { Meal, Day, MealPlan, User }, mongoose: { Types: { ObjectId } } } = require('easymeals-data')
const { AlreadyExistsError, AuthError, NotAllowedError, NotFoundError, ValueError } = require('../errors')
const validate = require('../utils/validate')
const fs = require('fs')
const path = require('path')

const logic = {

    //ESTO SERA GENERATE MENU
    /**
     * Registers a user
     * 
     * @param {string} id The user id
     * @param {string} text The postit text
     * 
     * @throws {TypeError} On non-string user id, or non-string postit text
     * @throws {Error} On empty or blank user id or postit text
     * 
     * @returns {Promise} Resolves on correct data, rejects on wrong user id
     */
    
    registerUser(name, surname, username, password) {
        validate([{ key: 'name', value: name, type: 'string' }, { key: 'surname', value: surname, type: 'string' }, { key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

        return (async () => {

            let user = await User.findOne({ username })

            if (user) throw new AlreadyExistsError(`username ${username} already registered`)

            user = new User({ name, surname, username, password })

            await user.save()
        })()
    },

    authenticateUser(username, password) {
        
        validate([{ key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

        return (async () => {
            const user = await User.findOne({ username })

            if (!user || user.password !== password) throw new AuthError('invalid username or password')

            return user.id
        })()
    },

    retrieveUser(id) {
        validate([{ key: 'id', value: id, type: 'string' }])
        return (async () => {
            const user = await User.findById(id, { '_id': 0, password: 0, __v: 0 }).lean()

            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.id = id

            return user
        })()
    },

    // updateUser(id, name, surname, username, oldPassword, newPassword, confirmNewPassword) {
    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'name', value: name, type: 'string', optional: true },
    //         { key: 'surname', value: surname, type: 'string', optional: true },
    //         { key: 'username', value: username, type: 'string', optional: true },
    //         { key: 'oldPassword', value: oldPassword, type: 'string' },
    //         { key: 'newPassword', value: newPassword, type: 'string', optional: true },
    //         { key: 'confirmNewPassword', value: confirmNewPassword, type: 'string', optional: true }
    //     ])

    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         if (user.password !== oldPassword) throw new AuthError('invalid password')

    //         if (username) {
    //             const _user = await User.findOne({ username })

    //             if (_user) throw new AlreadyExistsError(`username ${username} already exists`)

    //             name != null && (user.name = name)
    //             surname != null && (user.surname = surname)
    //             user.username = username

    //             if (newPassword != null && newPassword !== confirmNewPassword) throw new ValueError('new passwords provided do not match')
    //             user.password = newPassword

    //             await user.save()
    //         } else {
    //             name != null && (user.name = name)
    //             surname != null && (user.surname = surname)
    //             newPassword != null && (user.password = newPassword)
    //         }
    //         await user.save()
    //     })()
    // },

    searchRandomMeal(category, subcategory, diet, isSpecialMeal, isCold, intolerances, isLight, season) {
        
        validate([
            { key: 'category', value: category, type: 'string' },
            { key: 'subcategory', value: subcategory, type: 'string' },
            { key: 'diet', value: diet, type: 'number' },
            { key: 'isSpecialMeal', value: isSpecialMeal, type: 'boolean', optional: true },
            { key: 'isCold', value: isCold, type: 'boolean', optional: true },
            { key: 'intolerances', value: intolerances, type: ['string'] },
            { key: 'isLight', value: isLight, type: 'boolean', optional: true },
            { key: 'season', value: season, type: 'string' }
        ])
        
        const queryObject = {
            category,
            subcategory,
            diet: { $lte: diet },
            intolerances: { $nin: intolerances },
            season: { $in: season }
        }

        if (isSpecialMeal!=null) queryObject.isSpecialMeal = isSpecialMeal

        if (isCold) queryObject.isCold = isCold

        if (isLight) queryObject.isLight = isLight

        return (async () => {
            
            const meals = await Meal.find(queryObject).lean()
            //     //TO CONSIDER
            //     // const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()
            //     // if (!user) throw new NotFoundError(`user with id ${id} not found`)
            //     // user.id = id
            //     //name != null && (user.name = name)

            //CHECKS IF RANDOM MEAL IS CONTAINED WITHIN AVOID MEALS LIST OF USER
            // const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()


            // let counter = 0
            // let meal
            // do {
            let meal = {}
            if (meals.length) {
                meal = meals[Math.floor(Math.random() * meals.length)]
                delete meal.__v
                let copy = Object.assign({}, meal)
                meal.id = copy._id.toString()
                delete meal._id
            }

            //     counter++
            // }
            // while(user.mealsToAvoid.includes(meal.id) && counter < 10)          

            return meal
        })()
    },

    addMealplan(id, mealplan) {
        validate([
            { key: 'id', value: id, type: 'string' },
            // { key: 'mealplan', value: mealplan, type: Object },
        ])

        if (!ObjectId.isValid(id)) throw new ValueError(`id is not valid ${id}`)

        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            // if (user.savedMealPlans.includes(mealplan)) throw new AlreadyExistsError(`mealplan already added to saved meal plan list`) //NOT WORKING, REVIEW!!!

            user.savedMealPlans.push(mealplan)

            await user.save()
        })()
    },

    removeMealplan(id, mealplanId) {
        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'mealplanId', value: mealplanId, type: 'number' },
        ])
        return (async () => {

            const user = await User.findById(id)
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            // if (!user.savedMealPlans.includes(mealplan)) throw new NotFoundError(`mealplan not found in saved meal plan list`) //NOT WORKING, REVIEW!!
            if (!user.savedMealPlans) throw Error(`user with id ${id} has no saved mealplans`)

            user.savedMealPlans = user.savedMealPlans.filter(_mealplan => (_mealplan.date !== mealplanId))

            await user.save()
        })()
    },

    // addNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons) {
    //     validate([{ key: 'name', value: name, type: 'string' }, { key: 'surname', value: surname, type: 'string' }, { key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

    //     return (async () => {

    //         meal = new Meal({ name, diet, category, subcategory, mainIngredients, optionalIngredients, isSpecialMeal, isColdDish, intolerances, isLight, season, recipeLink, imageLink, status })

    //         await meal.save()
    //     })()
    // },

    addFavouriteMeal(id, favouriteMealId) {

        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'favouriteMealId', value: favouriteMealId, type: 'string' },
        ])
        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (user.favouriteMeals.includes(favouriteMealId)) throw new AlreadyExistsError(`meal already added to favourites`)

            user.favouriteMeals.push(favouriteMealId)

            await user.save()
        })()
    },

    removeFavouriteMeal(id, favouriteMealId) {

        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'favouriteMealId', value: favouriteMealId, type: 'string' },
        ])
        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (!user.favouriteMeals) throw Error(`favourites list of user with id ${id} is empty`)
            debugger
            if (!(user.favouriteMeals.includes(favouriteMealId))) throw new NotFoundError(`meal with id ${id} not found`)

            user.favouriteMeals = user.favouriteMeals.filter(id => {
                if (id !== favouriteMealId) return id
            })

            await user.save()
        })()
    },

    // addAvoidMeal(id, avoidMealId) {

    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'avoidMealId', value: avoidMealId, type: 'string' },
    //     ])
    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)
    //         if (user.mealsToAvoid.includes(avoidMealId)) throw new AlreadyExistsError(`meal already added to avoid meals list`)

    //         user.mealsToAvoid.push(avoidMealId)

    //         await user.save()
    //     })()
    // },

    // removeAvoidMeal(id, avoidMealId) {

    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'avoidMealId', value: avoidMealId, type: 'string' },
    //     ])
    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)
    //         if (!user.mealsToAvoid.includes(avoidMealId)) throw new NotFoundError(`meal with id ${id} not found`)
    //         if (!user.mealsToAvoid) throw Error(`avoids list of user with id ${id} is empty`)

    //         user.mealsToAvoid = user.mealsToAvoid.filter(id => {
    //             if (id !== avoidMealId) return id
    //         })

    //         await user.save()
    //     })()
    // },

    retrieveMeal(mealId) {
        validate([{ key: 'mealId', value: mealId, type: 'string' }])

        return (async () => {
            const meal = await Meal.findById(mealId, { '_id': 0, __v: 0 }).lean()

            if (!meal) throw new NotFoundError(`meal with id ${mealId} not found`)

            return meal
        })()
    }
}

module.exports = logic