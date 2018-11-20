const fs = require('fs')
const path = require('path')

const meals = []

meals.push({
    name: 'Corn flakes',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['corn'],
    optionalIngredients: ['honey', 'maple syrup'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/12/18/12/53/corn-flakes-1915632_1280.jpg'
})

meals.push({
    name: 'Avocado toast',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Avocado toast (gluten-free)',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Avocado toast with egg',
    diet: 'vegetarian',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'egg', 'bread'],
    optionalIngredients: ['olive oil', 'salt', 'rocket', 'pine nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_1280.jpg'
})

meals.push({
    name: 'Avocado toast with egg (gluten-free)',
    diet: 'vegetarian',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'egg', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt', 'rocket', 'pine nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_1280.jpg'
})

meals.push({
    name: 'Ham and cheese toast',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['ham', 'cheese', 'bread'],
    optionalIngredients: ['olive oil', 'tomato', 'basil','salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/03/17/18/17/bruschetti-2152337_1280.jpg'
})

meals.push({
    name: 'Gluten-free ham and cheese toast',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['ham', 'cheese', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'tomato', 'basil','salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/03/17/18/17/bruschetti-2152337_1280.jpg'
})

meals.push({
    name: 'Gluten-free avocado toast',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Margarita Pizza',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['pizza dough', 'tomato sauce', 'mozzarella'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten', 'lactose'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-ab4fe63f36e9e6aed813bb0bf1295b02/margarita+pizza',
    imageLink: 'https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_1280.jpg'
})

meals.push({
    name: 'Gluten-free margarita Pizza',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['gluten-free pizza dough', 'tomato sauce', 'mozzarella'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-a5ac95f928dbcb07e25d1ce7aa5c4a6e/margarita+pizza/gluten-free',
    imageLink: 'https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_1280.jpg'
})

meals.push({
    name: 'Gluten-free margarita Pizza (lactose free)',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['gluten-free pizza dough', 'tomato sauce', 'lactose-free cheese'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-a5ac95f928dbcb07e25d1ce7aa5c4a6e/margarita+pizza/gluten-free',
    imageLink: 'https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_1280.jpg'
})

meals.push({
    name: 'Roman style carbonara pasta',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['pasta', 'egg', 'bacon'],
    optionalIngredients: ['salt', 'black pepper', 'parmesano'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg'
})

meals.push({
    name: 'Gluten-free Roman style carbonara pasta',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['gluten-free pasta', 'egg', 'bacon'],
    optionalIngredients: ['salt', 'black pepper', 'parmesano'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg'
})

meals.push({
    name: 'Pasta with pesto sauce',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['pasta', 'pesto sauce'],
    optionalIngredients: ['salt', 'parmesano', 'basil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/ramp-pesto-pasta-ee678be26349cac7dddb2cb70a16887a/pasta+pesto',
    imageLink: 'https://cdn.pixabay.com/photo/2015/11/08/07/38/pasta-1033216_1280.jpg'
})

meals.push({
    name: 'Gluten-free pasta with pesto sauce',
    diet: 'flexitarian',
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['gluten-free pasta', 'pesto sauce'],
    optionalIngredients: ['salt', 'parmesano', 'basil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/ramp-pesto-0ad0d2c971532de1b042d51c42210855/pasta+pesto/gluten-free',
    imageLink: 'https://cdn.pixabay.com/photo/2015/11/08/07/38/pasta-1033216_1280.jpg'
})

meals.push({
    name: 'Plain rice',
    diet: 'vegan',
    category: 'carb',
    subcategory: 'rice',
    mainIngredients: ['rice'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/simple-white-rice-70d295b410e7083af8da2b1625ffd868/white+rice',
    imageLink: ''
})

meals.push({
    name: 'Crepe',
    diet: 'vegetarian',
    category: 'carb',
    subcategory: 'pancake',
    mainIngredients: ['egg', 'plain flour', 'milk', 'butter'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten', 'lactose'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/easy-pancakes-c04e2fced61a640936512c676f3efb0a/plain+crepe',
    imageLink: 'https://images.pexels.com/photos/315708/pexels-photo-315708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Crepe (gluten-free)',
    diet: 'vegetarian',
    category: 'carb',
    subcategory: 'pancake',
    mainIngredients: ['egg', 'gluten-free flour', 'milk', 'butter'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/basic-buckwheat-crepes-recipes-691424a3d15620c78f3d3626a1fd4f46/crepe/gluten-free',
    imageLink: 'https://images.pexels.com/photos/315708/pexels-photo-315708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Green beans and potatoes',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['green bean', 'potato'],
    optionalIngredients: ['salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/italian-green-beans-and-potatoes-022a855c240097c58b3d20d299d87ffc/green+beans+potato',
    imageLink: ''
})

meals.push({
    name: 'Carrots and potatoes',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['carrot', 'potato'],
    optionalIngredients: ['black pepper','salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Baked green beans, potates and carrots',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['green bean', 'potato', 'carrot'],
    optionalIngredients: ['salt', 'olive oil', 'chili', 'shallot', 'ginger', 'garlic', 'lemon', 'lime', 'turmeric', 'clove', 'coconut milk', 'tamari'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/new-potato-rendang-green-beans-recipes-de16e620b23bb5341b5090765c6d5716/green+bean+potato+carrot',
    imageLink: ''
})

meals.push({
    name: 'Spinach and potatoes',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['spinach', 'potato'],
    optionalIngredients: ['salt', 'garlic', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Collard greens and potatoes',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['collard greens', 'potato'],
    optionalIngredients: ['salt', 'garlic', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Kale, potatoes and carrots',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['kale', 'potato', 'carrot'],
    optionalIngredients: ['stock','salt', 'olive oil', 'garlic', 'lemon', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/dinosaur-kale-with-baby-potatoes-06d166d1d0f534913467459a146984c9/kale+potato',
    imageLink: ''
})

meals.push({
    name: 'Menestra',
    diet: 'vegan',
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['collard greens', 'green beans', 'carrot', 'potato'],
    optionalIngredients: ['salt', 'olive oil', 'garlic', 'lemon', 'black pepper', 'onion', 'artichoke', 'mushroom', 'parsley', 'sweet paprika', 'bay leave'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/menestra-spanish-style-veggie-stew-vegan-too-c19dfef6aa3f8e4f1c1c5c84cb9f1b33/menestra',
    imageLink: ''
})

meals.push({
    name: 'Red apple',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['apple'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg'
})

meals.push({
    name: 'Green apple',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['apple'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2018/06/06/10/43/apple-3457644_1280.jpg'
})

meals.push({
    name: 'Orange',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['orange'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_1280.jpg'
})

meals.push({
    name: 'Clementine',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['clementine'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg'
})

meals.push({
    name: 'Kiwi',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['kiwi'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg'
})

meals.push({
    name: 'Banana',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['banana'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2018/10/29/10/01/bananas-3780761_1280.jpg'
})

meals.push({
    name: 'Peach',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['peach'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Summer'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_1280.jpg'
})

meals.push({
    name: 'Apricot',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['peach'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Summer'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_1280.jpg'
})

meals.push({
    name: 'Orange juice',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'juice',
    mainIngredients: ['orange'],
    optionalIngredients: ['mint', 'sugar'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/12/20/21/43/orange-juice-1921548_1280.jpg'
})

meals.push({
    name: 'Orange and carrot juice',
    diet: 'vegan',
    category: 'fruit',
    subcategory: 'juice',
    mainIngredients: ['orange', 'carrot'],
    optionalIngredients: ['ginger'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/simple-orange-carrot-juice-recipe-f2f2736d1554c88bdb8459f1ca562bd9/orange+carrot+juice',
    imageLink: 'https://images.pexels.com/photos/162669/carrot-juice-juice-carrots-vegetable-juice-162669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Ham panini',
    diet: 'flexitarian',
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['bread', 'ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: 'https://www.edamam.com/recipe/simple-orange-carrot-juice-recipe-f2f2736d1554c88bdb8459f1ca562bd9/orange+carrot+juice',
    imageLink: 'https://images.pexels.com/photos/162669/carrot-juice-juice-carrots-vegetable-juice-162669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Gluten-free ham panini',
    diet: 'flexitarian',
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['gluten.free bread', 'ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Hamburger',
    diet: 'flexitarian',
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['hamburger', 'hamburger bread'],
    optionalIngredients: ['tomato', 'lettuce', 'ketchup', 'cheese', 'bacon'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/12/11/23/13/burger-1900560_1280.jpg'
})

meals.push({
    name: 'Hamburger (gluten-free)',
    diet: 'flexitarian',
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['hamburger', 'hamburger gluten-free bread'],
    optionalIngredients: ['tomato', 'lettuce', 'ketchup', 'cheese', 'bacon'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/12/11/23/13/burger-1900560_1280.jpg'
})

meals.push({
    name: 'Pasta salad with tomato and pesto',
    diet: 'vegan',
    category: 'salad',
    subcategory: 'none',
    mainIngredients: ['pasta', 'lettuce', 'tomato', 'basil', 'pesto sauce'],
    optionalIngredients: ['nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/11/23/18/31/close-up-1854245_1280.jpg'
})

meals.push({
    name: 'Gluten-free pasta salad with tomato and pesto',
    diet: 'vegan',
    category: 'salad',
    subcategory: 'none',
    mainIngredients: ['gluten-free pasta', 'lettuce', 'tomato', 'basil', 'pesto sauce'],
    optionalIngredients: ['nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://cdn.pixabay.com/photo/2016/11/23/18/31/close-up-1854245_1280.jpg'
})

meals.push({
    name: 'Rocket, tomato and avocado salad',
    diet: 'vegan',
    category: 'salad',
    subcategory: 'none',
    mainIngredients: ['rocket', 'tomato', 'avocado'],
    optionalIngredients: ['olives','nuts', 'bread', 'salt', 'olive oil', 'fresh cheese'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['Spring', 'Summer', 'Autum', 'Winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


fs.writeFileSync(path.join(__dirname, 'meals.json'), JSON.stringify(meals, null, 4))