const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

const Meal = new Schema({
    name: {
        type: String,
        required: true
    },
    diet: {
        type: Number,
        enum: [0, 1, 2, 3], // ['vegan', 'vegetarian', 'pescatarian', 'flexitarian'
        required: true
    },
    category: {
        type: String,
        enum: ['carb', 'milk', 'fruit', 'snack', 'vegetable', 'legume', 'salad', 'soup',
         'protein', 'patisserie', 'dairy'],
        required: true
    },
    subCategory: {
        type: String,
        enum: ['flake', 'toast', 'pizza', 'pasta', 'rice','pancake','fruit', 'juice', 'milkshake', 
        'cake', 'pastry', 'yoghurt', 'cheese', 'panini', 'nut', 'meat', 'fish', 'seafood',
         'egg', 'vegetable', 'none'],
        required: true
    },
    mainIngredients: [{
        type: String,
        required: true
    }],
    optionalIngredients: [{
        type: String,
        required: false
    }],
    isSpecialMeal: {
        type: Boolean,
        required: true
    },
    isColdDish: {
        type: Boolean,
        required: true
    },
    intolerances: [{
        type: String,
        enum: ['Gluten', 'Lactose'],
    }],
    // isLight: {
    //     type: Boolean,
    //     required: true
    // },
    season: [{
        type: String,
        enum: ['Spring', 'Summer', 'Autum', 'Winter'],
        required: true
    }],
    recipeLink: {
        type: String,
        required: false
    },
    imageLink: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    }
})

const Day = new Schema({
    day: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        required: true
    },
    breakfast: [{ type: ObjectId, ref: 'Meal', required: false }],
    midMorning: [{ type: ObjectId, ref: 'Meal', required: false }],
    lunch: [{ type: ObjectId, ref: 'Meal', required: false }],
    afternoon: [{ type: ObjectId, ref: 'Meal', required: false }],
    dinner: [{ type: ObjectId, ref: 'Meal', required: false }]
})

const MealPlan = new Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    days: [Day]
})

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedMeals: [Meal],

    savedMealPlans: [MealPlan],

    favouriteMeals: [Meal],

    mealsToAvoid: [Meal]
})

module.exports = {
    Meal,
    Day,
    MealPlan,
    User
}
