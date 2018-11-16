// require('dotenv').config()

const mongoose = require('mongoose')
const { User, Postit } = require('../data')
const logic = require('.')
const { AlreadyExistsError } = require('../errors')

const { expect } = require('chai')

const MONGO_URL = 'mongodb://localhost:27017/postit-test'

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    // before(() => mongoose.connect(MONGO_URL, { useNewUrlParser: true }))
    before(() => mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }))

    // beforeEach(() => User.deleteMany())
    beforeEach(() => Promise.all([User.deleteMany(), Postit.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Postit.deleteMany()]))

    describe('user', () => {
        describe('register', () => {
            let name, surname, username, password

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`
            })

            // it('should succeed on correct data', () =>
            //     logic.registerUser(name, surname, username, password)
            //         .then(() => User.find())
            //         .then(_users => {
            //             expect(_users.length).to.equal(1)

            //             const [user] = _users

            //             expect(user.id).to.be.a('string')
            //             expect(user.name).to.equal(name)
            //             expect(user.surname).to.equal(surname)
            //             expect(user.username).to.equal(username)
            //             expect(user.password).to.equal(password)
            //         })
            // )

            it('should succeed on correct data', async () => {
                const res = await logic.registerUser(name, surname, username, password)

                expect(res).to.be.undefined

                const _users = await User.find()

                expect(_users.length).to.equal(1)

                const [user] = _users

                expect(user.id).to.be.a('string')
                expect(user.name).to.equal(name)
                expect(user.surname).to.equal(surname)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)
            })

            it('should fail on undefined name', async () => {
                expect(() => logic.registerUser(undefined, surname, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases
        })

        describe('authenticate', () => {
            let user

            // beforeEach(() => {
            //     user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

            //     return user.save()
            // })

            // ALT
            beforeEach(() => (user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })).save())

            // it('should authenticate on correct credentials', () => {
            //     const { username, password } = user

            //     return logic.authenticateUser(username, password)
            //         .then(id => {
            //             expect(id).to.exist
            //             expect(id).to.be.a('string')

            //             return User.find()
            //                 .then(_users => {
            //                     const [_user] = _users

            //                     expect(_user.id).to.equal(id)
            //                 })
            //         })
            // })

            it('should authenticate on correct credentials', async () => {
                const { username, password } = user

                const id = await logic.authenticateUser(username, password)

                expect(id).to.exist

                expect(id).to.be.a('string')

                const _users = await User.find()

                const [_user] = _users

                expect(_user.id).to.equal(id)

            })

            it('should fail on undefined username', async () => {
                expect(() => logic.authenticateUser(undefined, user.password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases
        })

        describe('retrieve', () => {
            let user, postit

            // beforeEach(() => {
            //     postit = new Postit({ text: 'hello text' }) //Añadir antes si no crea un postit adicional en user
            //     user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123', postits: [postit] })

            //     return user.save()
            // })
            beforeEach( async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123'})

                await user.save()
            })

            // it('should succeed on valid id', () =>
            //     logic.retrieveUser(user.id)
            //         .then(_user => {
            //             expect(_user).not.to.be.instanceof(User)

            //             const { id, name, surname, username, password, postits } = _user

            //             expect(id).to.exist
            //             expect(id).to.be.a('string')
            //             expect(id).to.equal(user.id)
            //             expect(name).to.equal(user.name)
            //             expect(surname).to.equal(user.surname)
            //             expect(username).to.equal(user.username)
            //             expect(password).to.be.undefined
            //             expect(postits).not.to.exist
            //         })
            // )

            it('should succeed on valid id', async () => {
                const _user = await logic.retrieveUser(user.id)

                expect(_user).not.to.be.instanceof(User)

                const { id, name, surname, username, password, postits } = _user

                expect(id).to.exist
                expect(id).to.be.a('string')
                expect(id).to.equal(user.id)
                expect(name).to.equal(user.name)
                expect(surname).to.equal(user.surname)
                expect(username).to.equal(user.username)
                expect(password).to.be.undefined
                expect(postits).not.to.exist
            })
        })

        describe('update', () => {
            let user

            // beforeEach(() => {
            //     user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

            //     user.save()
            // })
            //ALT
            // beforeEach(() => (user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })).save())

            beforeEach(async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })
                await user.save()
            })

            // it('should update on correct data and password', () => {
            //     const { id, name, surname, username, password } = user

            //     const newName = `${name}-${Math.random()}`
            //     const newSurname = `${surname}-${Math.random()}`
            //     const newUsername = `${username}-${Math.random()}`
            //     const newPassword = `${password}-${Math.random()}`

                // return logic.updateUser(id, newName, newSurname, newUsername, newPassword, password)
                //     .then(() => User.find())
                //     .then(_users => {
                //         const [_user] = _users

                //         expect(_user.id).to.equal(id)

                //         const { name, surname, username, password } = _user

                //         expect(name).to.equal(newName)
                //         expect(surname).to.equal(newSurname)
                //         expect(username).to.equal(newUsername)
                //         expect(password).to.equal(newPassword)
                //     })
                
                it('should update on correct data and password', async () => {
                    const { id, name, surname, username, password } = user
    
                    const newName = `${name}-${Math.random()}`
                    const newSurname = `${surname}-${Math.random()}`
                    const newUsername = `${username}-${Math.random()}`
                    const newPassword = `${password}-${Math.random()}`

                    const res = await logic.updateUser(id, newName, newSurname, newUsername, newPassword, password)
                    
                    expect(res).to.be.undefined

                    const _users = await User.find()
                   
                    const [_user] = _users

                    expect(_user.id).to.equal(id)
                    expect(_user.name).to.equal(newName)
                    expect(_user.surname).to.equal(newSurname)
                    expect(_user.username).to.equal(newUsername)
                    expect(_user.password).to.equal(newPassword)
            })

            it('should update on correct id, name and password (other fields null)', async () => {
                const { id, name, surname, username, password } = user

                const newName = `${name}-${Math.random()}`

                const res = await logic.updateUser(id, newName, null, null, null, password)

                expect(res).to.be.undefined
                    
                const _users = await User.find()
                    
                const [_user] = _users

                        expect(_user.id).to.equal(id)
                        expect(_user.name).to.equal(newName)
                        expect(_user.surname).to.equal(surname)
                        expect(_user.username).to.equal(username)
                        expect(_user.password).to.equal(password)
            })

            it('should update on correct id, surname and password (other fields null)', async () => {
                const { id, name, surname, username, password } = user

                const newSurname = `${surname}-${Math.random()}`

                const res = await logic.updateUser(id, null, newSurname, null, null, password)
                
                expect(res).to.be.undefined

                const _users = await User.find()
                
                const [_user] = _users

                expect(_user.id).to.equal(id)
                expect(_user.name).to.equal(name)
                expect(_user.surname).to.equal(newSurname)
                expect(_user.username).to.equal(username)
                expect(_user.password).to.equal(password)
                
            })

            // TODO other combinations of valid updates

            it('should fail on undefined id', () => {
                const { id, name, surname, username, password } = user

                expect(() => logic.updateUser(undefined, name, surname, username, password, password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases

            describe('with existing user', () => {
                let user2

                beforeEach(async () => {
                    user2 = new User({ name: 'John', surname: 'Doe', username: 'jd2', password: '123' })

                    await user2.save()
                })

                it('should update on correct data and password', async () => {
                    const { id, name, surname, username, password } = user2

                    const newUsername = 'jd'

                    try {
                        await logic.updateUser(id, null, null, newUsername, null, password)
                    }
                    catch(err) {
                            expect(err).to.be.instanceof(AlreadyExistsError)
                    }
                    //tambien puedes dejarlo dentro del catch, si pones finally pasa por ahi si o si despues del catch
                    finally {
                            const _user = await User.findById(id)
                            expect(_user.id).to.equal(id)

                            expect(_user.name).to.equal(name)
                            expect(_user.surname).to.equal(surname)
                            expect(_user.username).to.equal(username)
                            expect(_user.password).to.equal(password)
                    }
                })
            })
        })
    })

    describe('postits', () => {
        describe('add', () => {
            let user, text, status

            beforeEach(async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

                text = `text-${Math.random()}`
                status ='todo'

                //return User.create(user)
                // ALT
                await user.save()
            })

            it('should succeed on correct data', async () => {
                await logic.addPostit(user.id, text)
                
                const postits = await Postit.find()
                
                const [postit] = postits

                expect(postit.text).to.equal(text)

                expect(postit.status).to.equal(status)

                expect(postit.user.toString()).to.equal(user.id)
            })

            // TODO other test cases
        })

        describe('list', () => {
            let user, postit, postit2

            beforeEach(async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

                postit = new Postit({ text: 'hello text', user: user.id })
                postit2 = new Postit({ text: 'hello text 2', user: user.id })

                await user.save()
                await postit.save()
                await postit2.save()
            })

            it('should succeed on correct data', async () => {
                const postits = await logic.listPostits(user.id)

                const _postits = await Postit.find()

                expect(_postits.length).to.equal(2)

                expect(postits.length).to.equal(_postits.length)

                const [_postit, _postit2] = _postits

                expect(_postit.id).to.equal(postit.id)
                expect(_postit.text).to.equal(postit.text)

                expect(_postit2.id).to.equal(postit2.id)
                expect(_postit2.text).to.equal(postit2.text)

                const [__postit, __postit2] = postits

                expect(__postit).not.to.be.instanceof(Postit)
                expect(__postit2).not.to.be.instanceof(Postit)

                expect(_postit.id).to.equal(__postit.id)
                expect(_postit.text).to.equal(__postit.text)

                expect(_postit2.id).to.equal(__postit2.id)
                expect(_postit2.text).to.equal(__postit2.text)
            })
        })

        describe('remove', () => {
            let user, postit

            beforeEach(async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })
                postit = new Postit({ text: 'hello text', user: user.id })

                await Promise.all([user.save(), postit.save()])
            })

            it('should succeed on correct data', async () => {
                const res = await logic.removePostit(user.id, postit.id)

                expect(res).to.be.undefined

                const postits = await Postit.find()

                expect(postits.length).to.equal(0)
            })
        })

        describe('modify', () => {
            let user, postit, newText

            beforeEach(async () => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })
                postit = new Postit({ text: 'hello text', user: user.id })

                newText = `new-text-${Math.random()}`

                await Promise.all([user.save(), postit.save()])
            })

            it('should succeed on correct data', async () => {
                const res = await logic.modifyPostit(user.id, postit.id, newText)

                expect(res).to.be.undefined

                const postits = await Postit.find()

                expect(postits.length).to.equal(1)

                const [_postit] = postits

                expect(_postit.text).to.equal(newText)
            })
        })
    })

    after(() => mongoose.disconnect())
})