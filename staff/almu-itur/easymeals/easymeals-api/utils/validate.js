const { ValueError } = require('../errors')

function validate(params) {
    params.forEach(({ key, value, type, optional }) => {
        switch (type) {
            case String:
                if (optional && value === null) break

                if (typeof value !== 'string') throw TypeError(`${value} is not a string`)

                if (!value.trim().length) throw new ValueError(`${key} is empty or blank`)

                break
            case Boolean:
                if (optional && value === null) break

                if (typeof value !== 'boolean') throw TypeError(`${value} is not a boolean`)

                break
            case Number:
                if (optional && value === null) break

                if (typeof value !== 'number') throw TypeError(`${value} is not a number`)

                break
            case Array: //Array of strings only
                if(optional && value === null) break

                if (typeof value != 'array') throw TypeError(`${value} is not an array`)

                value.forEach(item => {
                    if (item) 
                        if (typeof item !='string') throw TypeError(`${item} is not a string`)
                })
                break
        }
    })
}

module.exports = validate