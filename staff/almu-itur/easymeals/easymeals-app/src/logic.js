

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _mealPlan: sessionStorage.getItem('mealplan') || null,

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
        this._postits = []
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
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
                    { category: 'carb', subcategory: 'flake', isSpecial: false },
                    { category: 'milk', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false },
                    { category: 'vegetable', isSpecial: false },
                    { category: 'snack', subcategory: 'nut', isSpecial: false },
                    { category: 'salad', isSpecial: false },
                    { category: 'protein', subcategory: 'meat', isSpecial: false }]
                const tuesday = [
                    { category: 'carb', subcategory: 'toast', isSpecial: false },
                    { category: 'fruit', subcategory: 'juice', isSpecial: false },
                    { category: 'dairy', subcategory: 'yoghurt', isSpecial: false },
                    { category: 'snack', subcategory: 'panini', isSpecial: false },
                    { category: 'legume', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'soup', season: season, isCold: false, isSpecial: false },
                    { category: 'protein', subcategory: 'fish', isSpecial: false }]
                const wednesday = [
                    { category: 'carb', subcategory: 'flake', isSpecial: false },
                    { category: 'dairy', subcategory: 'yoghurt', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'snack', subcategory: 'pastisserie', isCold: true, isSpecial: false },
                    { category: 'vegetable', isSpecial: false },
                    { category: 'snack', subcategory: 'panini', isSpecial: false },
                    { category: 'salad', isSpecial: false },
                    { category: 'protein', subcategory: 'meat', isSpecial: false }]
                const thursday = [
                    { category: 'carb', subcategory: 'toast', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', isSpecial: false },
                    { category: 'milk', isSpecial: false },
                    { category: 'snack', subcategory: 'yoghurt', isSpecial: false },
                    { category: 'legume', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'soup', season: season, isCold: false, isSpecial: false },
                    { category: 'protein', subcategory: 'fish', isSpecial: false }]
                const friday = [
                    { category: 'carb', subcategory: 'flake', isSpecial: false },
                    { category: 'milk', isSpecial: false },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false },
                    { category: 'vegetable', isSpecial: false },
                    { category: 'snack', subcategory: 'nut', isSpecial: false },
                    { category: 'carb', subcategory: 'pizza', isSpecial: false }]
                const saturday = [
                    { category: 'carb', subcategory: 'pancake' },
                    { category: 'fruit', subcategory: 'milkshake', isSpecial: false },
                    { category: 'carb', isSpecial: true },
                    { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false },
                    { category: 'protein', subcategory: 'egg', isSpecial: false }]
                const sunday = [
                    { category: 'carb', subcategory: 'toast', isSpecial: true },
                    { category: 'fruit', subcategory: 'juice', isSpecial: false },
                    { category: 'protein', isSpecial: true },
                    { category: 'pastisserie', isSpecial: true },
                    { category: 'salad', isSpecial: false },
                    { category: 'snack', subcategory: 'yoghurt', isSpecial: false }]

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

    createMenu(diet, _plan, intolerances) {
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
                            const category = meal.category
                            const subcategory = meal.subcategory
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

                                    return res.data
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
                this._mealPlan = res
            })
        }
        else {
            throw Error('No meal plan') //CONTROL DOBLE, YA SE LANZA ERROR EN CREATE MENU
        }

    }



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

    // removePostit(id) {
    //     if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    //     if (!id.trim().length) throw Error('id is empty or blank')

    //     return fetch(`${this.url}/users/${this._userId}/postits/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Authorization': `Bearer ${this._token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    // modifyPostit(id, text, status) {

    //     if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    //     if (!id.trim().length) throw Error('id is empty or blank')

    //     if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //     if (!text.trim()) throw Error('text is empty or blank')

    //     if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)

    //     if (!status.trim()) throw Error('text is empty or blank')

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

// export default logic
module.exports = logic