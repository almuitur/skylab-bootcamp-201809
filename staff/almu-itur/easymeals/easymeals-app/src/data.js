
const data = {

    selectPlan(plan, diet) {

        let mealPlan = []
        const season = 'autum'

        switch (plan) {
            case 'balanced':

                let monday = [
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false } }]
                let tuesday = [
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecialMeal: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false } }]
                let wednesday = [
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'midMorning', search: { category: 'pastisserie', subcategory: 'pastry', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false } }]
                let thursday = [
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'midMorning', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecialMeal: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false } }]
                let friday = [
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecialMeal: false } },
                    { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecialMeal: false } }]
                let saturday = [
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'pancake' } },
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecialMeal: false } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'carb', isSpecialMeal: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false } },
                    { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecialMeal: false } }]
                let sunday = [
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: true } },
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', isSpecialMeal: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'pastisserie', subcategory: 'cake', isSpecialMeal: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } }]

                switch (diet) {
                    case 'vegan':
                        delete monday[7].search.subcategory
                        delete tuesday[7].search.subcategory
                        delete wednesday[7].search.subcategory
                        delete thursday[7].search.subcategory
                        delete saturday[4].search.subcategory

                        break
                    case 'vegetarian':
                        delete monday[7].search.subcategory
                        tuesday[7].search.subcategory = 'egg'
                        delete wednesday[7].search.subcategory
                        break
                    case 'pescatarian':
                        delete monday[7].search.subcategory
                        wednesday[7].search.subcategory = 'egg'
                        break
                }

                mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                
                break

            case 'diet':

                monday = [
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecialMeal: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false, isLight: true } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false, isLight: true } }]
                tuesday = [
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecialMeal: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false, isLight: true } }]
                wednesday = [
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'pastisserie', isCold: true, isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false, isLight: true } }]
                thursday = [
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecialMeal: false, isLight: true } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false, isLight: true } }]
                friday = [
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecialMeal: false, isLight: true } },
                    { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecialMeal: false, isLight: true } }]
                saturday = [
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isLight: true } },
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecialMeal: false, isLight: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'vegetable', isSpecialMeal: true, isLight: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecialMeal: false, isLight: true } }]
                sunday = [
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: true, isLight: true } },
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false, isLight: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', isSpecialMeal: true, isLight: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecialMeal: false, isLight: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', isSpecialMeal: false, isLight: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true } }]

                mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                
                switch (diet) {
                    case 'vegan':
                        delete monday[7].search.subcategory
                        delete tuesday[7].search.subcategory
                        delete wednesday[7].search.subcategory
                        delete thursday[7].search.subcategory
                        delete saturday[4].search.subcategory

                        break
                    case 'vegetarian':
                        delete monday[7].search.subcategory
                        tuesday[7].search.subcategory = 'egg'
                        delete wednesday[7].search.subcategory
                        delete thursday[7].search.subcategory
                        break
                    case 'pescatarian':
                        delete monday[7].search.subcategory
                        wednesday[7].search.subcategory = 'egg'
                        break
                }
                break
                default:
                    mealPlan =  plan
                    
                break

        }
        return mealPlan
    }
}

export default data
