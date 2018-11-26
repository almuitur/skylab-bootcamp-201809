

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _mealPlan: sessionStorage.getItem('mealplan') || null,
    _diet: sessionStorage.getItem('diet') || null,
    _intolerances: sessionStorage.getItem('intolerances') || null,

    url: 'NO-URL',

    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch(`${this.url}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch(`${this.url}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    get loggedIn() {
        return !!this._userId
    },

    logout() {
        this._mealPlan = null
        this._userId = null
        this._token = null
        this._diet = null
        this._intolerances = null

        sessionStorage.removeItem('mealPlan')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('diet')
        sessionStorage.removeItem('intolerances')
    },

    updateUser(name, surname, username, newPassword, password, confirmNewPassword) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (typeof newPassword !== 'string') throw TypeError(`${newPassword} is not a string`)
        if (typeof confirmNewPassword !== 'string') throw TypeError(`${confirmNewPassword} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        if (!newPassword.trim()) throw Error('new password is empty or blank')
        if (!confirmNewPassword.trim()) throw Error('confirm new password is empty or blank')

        return fetch(`${this.url}/users/${this._userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ name, surname, username, password, newPassword, confirmNewPassword })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    selectPlan(plan) {

        const season = 'autum' //Create function getSeason() with Date.now()
        const mealPlan = []

        switch (plan) {
            case 'balanced':
                const monday = [
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false } },
                    { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false } }]
                const tuesday = [
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false } }]
                const wednesday = [
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'wednesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'pastisserie', isCold: true, isSpecial: false } },
                    { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false } }]
                const thursday = [
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecial: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'thursday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false } },
                    { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false } }]
                const friday = [
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false } },
                    { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false } },
                    { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecial: false } }]
                const saturday = [
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'pancake' } },
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecial: false } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'carb', isSpecial: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecial: false } }]
                const sunday = [
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: true } },
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', isSpecial: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'pastisserie', isSpecial: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } }]

                mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                break
            case 'diet':
                break
            case 'custom':
                break
            default: throw Error('plan not found')
        }
        return mealPlan
    },

    createMealPlan(diet, _plan, intolerances) {
        // if (typeof diet !== 'string') throw TypeError(`${diet} is not a string`)
        // if (typeof plan !== 'string') throw TypeError(`${plan} is not a string`)
        // if (typeof intolerances !== 'array') throw TypeError(`${intolerances} is not a string`)

        // if (!diet.trim()) throw Error('diet is empty or blank')
        // if (!plan.trim()) throw Error('plan is empty or blank')
        // if (!intolerances.trim()) throw Error('intolerances is empty or blank')

        const season = 'autum' //Create function getSeason() with Date.now()
        const plan = this.selectPlan(_plan)

        if (plan) {

            let mealsWeek = plan.map(day => {

                return new Promise((resolve, reject) => {
                    try {
                        let mealsDay = day.map(meal => {
                            const category = meal.search.category
                            const subcategory = meal.search.subcategory
                            // const isSpecial =  meal.isSpecial
                            // const isCold = meal.isCold
                            // const isLight = meal.isLight

                            return fetch(`${this.url}/meals/find`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8',
                                    'Authorization': `Bearer ${this._token}`
                                },
                                // body: JSON.stringify({ category, subcategory, diet, isSpecial, isCold, intolerances, season })
                                body: JSON.stringify({ category, subcategory })
                            })
                                .then(res => res.json())

                                .then(res => {

                                    if (res.error) throw Error(res.error)
                                    let resObject = {}
                                    resObject.day = meal.day
                                    resObject[meal.mealTime] = res.data
                                    resObject[meal.mealTime].id = res.data._id
                                    delete resObject[meal.mealTime]._id

                                    return resObject
                                })
                        })
                        Promise.all(mealsDay).then((res) => {
                            resolve(res)
                        })

                    } catch (err) {
                        reject(err)
                    }
                })
            })
            Promise.all(mealsWeek).then((res) => {
                const _mealPlan = {}
                _mealPlan.date = Date.now()
                _mealPlan.name = _plan
                _mealPlan.days = [[]]

                _mealPlan.days = res.map(day => {
                    let _day = {}
                    _day.day = day[0].day
                    _day.breakfast = []
                    _day.midMorning = []
                    _day.lunch = []
                    _day.afternoon = []
                    _day.dinner = []

                    day.forEach(meal => {
                        meal.breakfast && (meal.breakfast.status = `${_day.day}breakfast`)
                        meal.midMorning && (meal.midMorning.status = `${_day.day}midMorning`)
                        meal.lunch && (meal.lunch.status = `${_day.day}lunch`)
                        meal.afternoon && (meal.afternoon.status = `${_day.day}afternoon`)
                        meal.dinner && (meal.dinner.status = `${_day.day}dinner`)

                        meal.breakfast && _day.breakfast.push(meal.breakfast)
                        meal.midMorning && _day.midMorning.push(meal.midMorning)
                        meal.lunch && _day.lunch.push(meal.lunch)
                        meal.afternoon && _day.afternoon.push(meal.afternoon)
                        meal.dinner && _day.dinner.push(meal.dinner)
                    })
                    return _day
                })
                const mealPlan = JSON.stringify(_mealPlan)
                sessionStorage.setItem('mealPlan', mealPlan)

                diet = JSON.stringify(diet);
                sessionStorage.setItem('diet', diet)

                intolerances = JSON.stringify(intolerances);
                sessionStorage.setItem('intolerances', intolerances)
            })
        }
        else {
            throw Error('No meal plan') //CONTROL DOBLE, YA SE LANZA ERROR EN CREATE MENU
        }

    },

    // addPostit(text) {
    //     if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //     if (!text.trim()) throw Error('text is empty or blank')

    //     return fetch(`${this.url}/users/${this._userId}/postits`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ text })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    // listPostits() {
    //     return fetch(`${this.url}/users/${this._userId}/postits`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${this._token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)

    //             return res.data
    //         })
    // },

    removeMeal(id, status) {
        // if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
        // if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)

        // if (!id.trim().length) throw Error('id is empty or blank')
        // if (!status.trim().length) throw Error('status is empty or blank')

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        let index = status.indexOf('y')
        let mealDay = status.slice(0, index + 1)
        let mealTime = status.slice(index + 1)
        let dayIndex = 0

        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)

        mealPlan.days[dayIndex][mealTime] = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id !== id) return meal
        })

        mealPlan = JSON.stringify(mealPlan);
        sessionStorage.setItem('mealPlan', mealPlan)
        _mealPlan = sessionStorage.getItem('mealPlan')
        mealPlan = JSON.parse(_mealPlan)

        return mealPlan
    },

    moveMeal(id, name, status, previousStatus) {
        // if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
        // if (!id.trim().length) throw Error('id is empty or blank')

        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (!name.trim()) throw Error('name is empty or blank')

        if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)
        if (!status.trim()) throw Error('status is empty or blank')

        if (typeof previousStatus !== 'string') throw new TypeError(`${previousStatus} is not a string`)
        if (!previousStatus.trim()) throw Error('previousStatus is empty or blank')

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

        //PREVIOUS STATE
        let index = previousStatus.indexOf('y')
        let mealDay = previousStatus.slice(0, index + 1)
        let mealTime = previousStatus.slice(index + 1)
        let dayIndex = 0
        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)

        //GET MEAL
        let meal = {}
        meal = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id === id) return meal
        })

        //DELETE OLD STATE
        mealPlan.days[dayIndex][mealTime] = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id !== id) return meal
        })

        //UPDATE NEW STATE
        index = status.indexOf('y')
        mealDay = status.slice(0, index + 1)
        mealTime = status.slice(index + 1)

        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)
        // mealPlan.days[dayIndex][mealTime].push(meal[0])

        mealPlan.days[dayIndex][mealTime].push(meal[mealPlan.days[dayIndex][mealTime].length])

        // mealPlan.days[dayIndex][mealTime][mealPlan.days[dayIndex][mealTime].length] = meal
        mealPlan = JSON.stringify(mealPlan);
        sessionStorage.setItem('mealPlan', mealPlan)
        _mealPlan = sessionStorage.getItem('mealPlan')
        mealPlan = JSON.parse(_mealPlan)

        return mealPlan
    },

    generateShoppingList() {

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']
        let mainIngredients = []
        let optionalIngredients = []

        mealsDay.map(mealTime => {

            mealPlan.days.map((day, dayIndex) => {

                day[dayIndex][mealTime].length > 0 && day[dayIndex][mealTime].map(meal => {

                    if (meal.mainIngredients.length > 0) {
                        meal.mainIngredients.map(mainIngredient => {
                            if (!mainIngredients.includes(mainIngredient)) mainIngredients.push(mainIngredient)
                        })
                    }
                    if (meal.optionalIngredients.length > 0) {
                        meal.optionalIngredients.map(optionalIngredient => {
                            if (!optionalIngredients.includes(optionalIngredient)) optionalIngredients.push(optionalIngredient)
                        })
                    }
                })
            })
        })
        const shoppingList = {
            mainIngredients: mainIngredients,
            optionalIngredients: optionalIngredients
        }
        return shoppingList
    }

    // modifyPostit(id, text, status) {

    // if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    // if (!id.trim().length) throw Error('id is empty or blank')

    // if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    // if (!text.trim()) throw Error('text is empty or blank')

    // if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)

    // if (!status.trim()) throw Error('text is empty or blank')

    //     return fetch(`${this.url}/users/${this._userId}/postits/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ text, status })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // }
}

export default logic
// module.exports = logic