const { mongoose, models: { Meal, Day, MealPlan, User } } = require('easymeals-data')
const logic = require('.')
const { AlreadyExistsError, AuthError, NotAllowedError, NotFoundError, ValueError } = require('../errors')
const { expect } = require('chai')
const fs = require('fs-extra')
const path = require('path')
const hasha = require('hasha')
const streamToArray = require('stream-to-array')
const text2png = require('text2png')
const meals = require('../data/demos/meals')


const MONGO_URL = 'mongodb://localhost:27017/easymeals-test'

describe('logic', () => {
    before(() => mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }))

    beforeEach(async () => {
        await Meal.deleteMany()

        await Meal.insertMany(meals)
    })

    describe('meals', () => {
        describe('search random meal', () => {
            it('should succeed on correct data', async () => {
                const res = await logic.searchRandomMeal('carb', 'pizza', 0, false, false, ['gluten', 'lactose'], false, 'autum')

                expect(res).not.to.be.undefined
                expect(res).to.be.instanceOf(Object)
                expect(res.category).to.equal('carb')
                expect(res.subcategory).to.equal('pizza')
                expect(res.intolerances.length).to.equal(0)
                expect(res.diet).to.equal(0)
                expect(res.isSpecialMeal).to.equal(false)
                expect(res.intolerances).not.to.contain('gluten')
                expect(res.intolerances).not.to.contain('lactose')
                expect(res.isLight).to.equal(false)

            })

            it('should return object with undefined id if there are no results for the search', async () => {
                const res = await logic.searchRandomMeal('carb', 'fruit', 0, true, false, ['gluten'], true, 'autum')

                expect(res).not.to.be.undefined
                expect(res).to.be.instanceOf(Object)
                expect(res.id).to.be.undefined
                expect(res.name).not.to.exist
                expect(res.category).not.to.exist
                expect(res.subcategory).not.to.exist
                expect(res.diet).not.to.exist
                expect(res.isSpecialMeal).not.to.exist
                expect(res.isCold).not.to.exist
                expect(res.intolerances).not.to.exist
                expect(res.isLight).not.to.exist
                expect(res.season).not.to.exist
            })

            it('should fail on undefined category', async () => {
                try {
                    await logic.searchRandomMeal(undefined, 'fruit', 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`undefined is not a string`)
                }
            })

            it('should fail on undefined subcategory', async () => {
                try {
                    await logic.searchRandomMeal('carb', undefined, 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`undefined is not a string`)
                }
            })

            it('should fail on undefined diet', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', undefined, true, true, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`undefined is not a number`)
                }
            })

            it('should fail on undefined intolerances', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, true, undefined, true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`undefined is not an array`)
                }
            })

            it('should fail on empty category', async () => {
                try {
                    await logic.searchRandomMeal('', 'fruit', 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`category is empty or blank`)
                }
            })

            it('should fail on empty subcategory', async () => {
                try {
                    await logic.searchRandomMeal('carb', '', 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`subcategory is empty or blank`)
                }
            })

            it('should fail on empty diet', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', '', true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(` is not a number`)
                }
            })

            it('should fail on empty season', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, false, ['gluten'], true, '')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`season is empty or blank`)
                }
            })
           
            it('should fail on category different than string', async () => {
                try {
                    await logic.searchRandomMeal(0, 'fruit', 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a string`)
                }
            })

            it('should fail on subcategory different than string', async () => {
                try {
                    await logic.searchRandomMeal('carb', 0, 0, true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a string`)
                }
            })

            it('should fail on diet different than number', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 'diet', true, false, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`diet is not a number`)
                }
            })

            it('should fail on isSpecialMeal different than boolean', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, 0, false, ['gluten'], true, 'autum')

                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a boolean`)
                }
            })

            it('should fail on isCold different than boolean', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, 0, ['gluten'], true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a boolean`)
                }
            })

            it('should fail on intolerances different than array', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, true, 'gluten', true, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`gluten is not an array`)
                }
            })

            it('should fail on intolerances content different than string', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, true, [0], true, 'autum')

                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 inside array is not a string`)
                }
            })

            it('should fail on isLight different than boolean', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, true, ['gluten'], 0, 'autum')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a boolean`)
                }
            })

            it('should fail on season different than string', async () => {
                try {
                    await logic.searchRandomMeal('carb', 'pizza', 0, true, true, ['gluten'], true, 0)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a string`)
                }
            })
        })
    })

    describe('mealplans', () => {

        describe('add mealplan', () => {
            let user, mealplan, _name, _surname, _username, _password

            beforeEach(async () => {
                _name = `name-${Math.random()}`
                _surname = `surname-${Math.random()}`
                _username = `username-${Math.random()}`
                _password = `password-${Math.random()}`

                user = new User({ name: _name, surname: _surname, username: _username, password: _password })
                
                await user.save()
            })

            it('should succeed on correct data', async () => {
            mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })
            
            await logic.addMealplan(user.id, mealplan)

            const _user = await logic.retrieveUser(user.id)
            
            expect(_user.savedMealPlans).to.exist
            expect(_user.savedMealPlans).to.be.instanceOf(Array)
            expect(_user.savedMealPlans.length).to.equal(1)
            expect(_user.savedMealPlans[0].name).to.equal('balanced')
            expect(_user.savedMealPlans[0].date).to.equal('1543838559813')
            
            })

            it('should fail on incorrect user id', async () => {
                const mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })

                const userId = Math.random().toString()

                try {
                    await logic.addMealplan(userId, mealplan)

                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`id is not valid ${userId}`)
                }
            })
            
            it('should fail on undefined user id', async () => {
                
                mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })
                
                try {
                    await logic.addMealplan(undefined, mealplan)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`undefined is not a string`)
                }
    
            })
            it('should fail on empty user id', async () => {
                
                mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })
                
                try {
                    await logic.addMealplan('', mealplan)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`id is empty or blank`)
                }
    
            })

            it('should fail on blank user id', async () => {
                
                mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })

                const userId = '  /t/n'

                try {
                    await logic.addMealplan(userId, mealplan)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(ValueError)
                    expect(err.message).to.equal(`id is not valid ${userId}`)
                }
            })   
            
            it('should fail on user id different than string', async () => {
                
                mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })
                
                try {
                    await logic.addMealplan(0, mealplan)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`0 is not a string`)
                }
            }) 

            it('should fail on mealplan different than object', async () => {
                mealplan = []
                try {
                    await logic.addMealplan(_user.id, mealplan)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(TypeError)
                    expect(err.message).to.equal(`${mealplan} is not an object`)
                }
            })

        })

        describe('remove mealplan', () => {
            let user, mealplan            

            beforeEach(async () => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`

                (user = new User({ name: name, surname: surname, username: username, password: password })).save()

                mealplan = new MealPlan({ date: '1543838559813', name: 'balanced', day: [{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday' }, { day: 'friday' }, { day: 'saturday' }, { day: 'sunday' }] })

                user.savedMealPlans.push(mealplan)

                await user.save()
            })

            it('should succeed on correct data', async () => {
                const res = await logic.removeMealplan(user.id, mealplan.date)

                expect(res).to.be.a('array')             

                expect(postits.length).to.equal(0)
            })

            it('should fail on incorrect data', async () => {
                try {
                    await logic.removeMealplan(user.id, 'wrong-mealplan-id')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(NotFoundError)
                    expect(err.message).to.equal(`mealplan not found in saved meal plan list`)
                }
            })
        })
    })

    beforeEach(() => Promise.all([User.deleteMany()]))

    describe('user', () => {
        describe('register', () => {
            let name, surname, username, password

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`
            })

            it('should succeed on correct data', async () => {
                const res = await logic.registerUser(name, surname, username, password)

                expect(res).to.be.undefined

                const users = await User.find()

                expect(users.length).to.equal(1)

                const [user] = users

                expect(user.id).to.be.a('string')
                expect(user.name).to.be.a('string')
                expect(user.surname).to.be.a('string')
                expect(user.username).to.be.a('string')
                expect(user.password).to.be.a('string')

                expect(user.name).to.equal(name)
                expect(user.surname).to.equal(surname)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)
            })

            it('should fail on undefined name', () => {
                expect(() => logic.registerUser(undefined, surname, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty name', () => {
                expect(() => logic.registerUser('', surname, username, password)).to.throw(ValueError, 'name is empty or blank')
            })

            it('should fail on blank name', () => {
                expect(() => logic.registerUser('   \t\n', surname, username, password)).to.throw(ValueError, 'name is empty or blank')
            })

            it('should fail on undefined surname', () => {
                expect(() => logic.registerUser(name, undefined, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty surname', () => {
                expect(() => logic.registerUser(name, '', username, password)).to.throw(ValueError, 'surname is empty or blank')
            })

            it('should fail on blank surname', () => {
                expect(() => logic.registerUser(name, '   \t\n', username, password)).to.throw(ValueError, 'surname is empty or blank')
            })
            it('should fail on undefined username', () => {
                expect(() => logic.registerUser(name, surname, undefined, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty username', () => {
                expect(() => logic.registerUser(name, surname, '', password)).to.throw(ValueError, 'username is empty or blank')
            })

            it('should fail on blank username', () => {
                expect(() => logic.registerUser(name, surname, '   \t\n', password)).to.throw(ValueError, 'username is empty or blank')
            })
            it('should fail on undefined password', () => {
                expect(() => logic.registerUser(name, surname, username, undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty password', () => {
                expect(() => logic.registerUser(name, surname, username, '')).to.throw(ValueError, 'password is empty or blank')
            })

            it('should fail on blank password', () => {
                expect(() => logic.registerUser(name, surname, username, '   \t\n')).to.throw(ValueError, 'password is empty or blank')
            })

            it('should fail on already registered username', () => {
                expect(() => logic.registerUser(name, surname, username, password)).to.throw(AlreadyExistsError, `username ${username} already registered`)
            })
        })

        describe('authenticate', () => {
            let user

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`

                    (user = new User({ name: name, surname: surname, username: username, password: password })).save()
            })

            it('should authenticate on correct credentials', async () => {
                const { username, password } = user

                const id = await logic.authenticateUser(username, password)

                const _user = await User.findOne({ username })

                expect(id).to.exist
                expect(id).to.be.a('string')
                expect(id).to.equal(_user.id)
            })

            it('should fail on undefined username', () => {
                expect(() => logic.authenticateUser(undefined, user.password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty username', () => {
                expect(() => logic.authenticateUser('', user.password)).to.throw(ValueError, 'username is empty or blank')
            })

            it('should fail on blank username', () => {
                expect(() => logic.authenticateUser('   \t\n', user.password)).to.throw(ValueError, 'username is empty or blank')
            })

            it('should fail on undefined password', () => {
                expect(() => logic.authenticateUser(user.username, undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty password', () => {
                expect(() => logic.authenticateUser(user.username, '')).to.throw(ValueError, 'password is empty or blank')
            })

            it('should fail on blank password', () => {
                expect(() => logic.authenticateUser(user.username, '   \t\n')).to.throw(ValueError, 'password is empty or blank')
            })

            it('should fail on incorrect username', async () => {
                try {
                    await logic.authenticateUser('wrong-username', password)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(AuthError)
                    expect(err.message).to.equal(`invalid username or password`)
                }
            })

            it('should fail on incorrect password', async () => {
                try {
                    await logic.authenticateUser(username, 'wrong-password')
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(AuthError)
                    expect(err.message).to.equal(`invalid username or password`)
                }
            })

        })

        describe('retrieve', () => {
            let user

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`

                    (user = new User({ name: name, surname: surname, username: username, password: password })).save()
            })

            it('should succeed on valid id', async () => {
                const _user = await logic.retrieveUser(user.id)

                expect(_user).not.to.be.instanceof(User)

                const { id, name, surname, username, password, savedMealPlans, savedCustomMealPlan, favouriteMeals, mealsToAvoid } = _user

                expect(id).to.exist
                expect(id).to.be.a('string')
                expect(id).to.equal(user.id)
                expect(name).to.equal(user.name)
                expect(surname).to.equal(user.surname)
                expect(username).to.equal(user.username)
                expect(password).to.be.undefined
                expect(savedMealPlans).length.to.be(0)
                expect(savedCustomMealPlan).length.to.be(0)
                expect(favouriteMeals).length.to.be(0)
                expect(mealsToAvoid).length.to.be(0)
            })

            it('should fail on incorrect id', async () => {
                try {
                    await logic.retrieveUser(`id-${Math.random()}`)
                    expect(true).to.be.false
                } catch (err) {
                    expect(err).to.be.instanceof(NotFoundError)
                    expect(err.message).to.equal(`user with id ${id} not found`)
                }
            })
        })

        // describe('update', () => {
        //     let user

        //     beforeEach(() => {
        //         name = `name-${Math.random()}`
        //         surname = `surname-${Math.random()}`
        //         username = `username-${Math.random()}`
        //         password = `password-${Math.random()}`

        //         (user = new User({ name: name, surname: surname, username: username, password: password })).save()
        //     })

        //     it('should update on correct data and password', async () => {
        //         const { id, name, surname, username, password } = user

        //         const newName = `${name}-${Math.random()}`
        //         const newSurname = `${surname}-${Math.random()}`
        //         const newUsername = `${username}-${Math.random()}`
        //         const newPassword = `${password}-${Math.random()}`

        //         const res = await logic.updateUser(id, newName, newSurname, newUsername, newPassword, password)

        //         expect(res).to.be.undefined

        //         const _users = await User.find()

        //         const [_user] = _users

        //         expect(_user.id).to.equal(id)

        //         expect(_user.name).to.equal(newName)
        //         expect(_user.surname).to.equal(newSurname)
        //         expect(_user.username).to.equal(newUsername)
        //         expect(_user.password).to.equal(newPassword)
        //     })

        //     it('should update on correct id, name and password (other fields null)', async () => {
        //         const { id, name, surname, username, password } = user

        //         const newName = `${name}-${Math.random()}`

        //         const res = await logic.updateUser(id, newName, null, null, null, password)

        //         expect(res).to.be.undefined

        //         const _users = await User.find()

        //         const [_user] = _users

        //         expect(_user.id).to.equal(id)

        //         expect(_user.name).to.equal(newName)
        //         expect(_user.surname).to.equal(surname)
        //         expect(_user.username).to.equal(username)
        //         expect(_user.password).to.equal(password)
        //     })

        //     it('should update on correct id, surname and password (other fields null)', async () => {
        //         const { id, name, surname, username, password } = user

        //         const newSurname = `${surname}-${Math.random()}`

        //         const res = await logic.updateUser(id, null, newSurname, null, null, password)

        //         expect(res).to.be.undefined

        //         const _users = await User.find()

        //         const [_user] = _users

        //         expect(_user.id).to.equal(id)

        //         expect(_user.name).to.equal(name)
        //         expect(_user.surname).to.equal(newSurname)
        //         expect(_user.username).to.equal(username)
        //         expect(_user.password).to.equal(password)
        //     })

        //     // TODO other combinations of valid updates

        //     it('should fail on undefined id', () => {
        //         const { id, name, surname, username, password } = user

        //         expect(() => logic.updateUser(undefined, name, surname, username, password, password)).to.throw(TypeError, 'undefined is not a string')
        //     })

        //     // TODO other test cases

        //     describe('with existing user', () => {
        //         let user2

        //         beforeEach(async () => {
        //             user2 = new User({ name: 'John', surname: 'Doe', username: 'jd2', password: '123' })

        //             await user2.save()
        //         })

        //         it('should update on correct data and password', async () => {
        //             const { id, name, surname, username, password } = user2

        //             const newUsername = 'jd'

        //             try {
        //                 const res = await logic.updateUser(id, null, null, newUsername, null, password)

        //                 expect(true).to.be.false
        //             } catch (err) {
        //                 expect(err).to.be.instanceof(AlreadyExistsError)
        //             } finally {
        //                 const _user = await User.findById(id)

        //                 expect(_user.id).to.equal(id)

        //                 expect(_user.name).to.equal(name)
        //                 expect(_user.surname).to.equal(surname)
        //                 expect(_user.username).to.equal(username)
        //                 expect(_user.password).to.equal(password)
        //             }
        //         })
        //     })
    })

    afterEach(() => Promise.all([User.deleteMany()]))


    after(() => mongoose.disconnect())
})