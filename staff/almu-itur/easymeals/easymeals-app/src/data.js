
const data = {

    selectPlan(plan) {
        
        const mealPlan = []
        const season = 'autum'

        switch (plan) {
            case 'balanced':

                let monday = [
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false } },
                    { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false } }]
                let tuesday = [
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false } },
                    { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false } }]
                let wednesday = [
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'wednesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'pastisserie', isCold: true, isSpecial: false } },
                    { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false } }]
                let thursday = [
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecial: false } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'thursday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'yoghurt', isSpecial: false } },
                    { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false } },
                    { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false } }]
                let friday = [
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false } },
                    { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false } },
                    { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false } },
                    { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecial: false } }]
                let saturday = [
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'pancake' } },
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecial: false } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'carb', isSpecial: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false } },
                    { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecial: false } }]
                let sunday = [
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: true } },
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', isSpecial: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'pastisserie', isSpecial: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false } }]

                mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday)

                break

            case 'diet':

                monday = [
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false, isLight: true} },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false, isLight: true } },
                    { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false, isLight: true } },
                    { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false, isLight: true } },
                    { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false, isLight: true } },
                    { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false, isLight: true } }]
                tuesday = [
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false, isLight: true } },
                    { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false, isLight: true } }]
                wednesday = [
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'pastisserie', isCold: true, isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false, isLight: true } },
                    { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecial: false, isLight: true } }]
                thursday = [
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'yoghurt', isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'soup', season: season, isCold: false, isSpecial: false, isLight: true } },
                    { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecial: false, isLight: true } }]
                friday = [
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isCold: true, isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nut', isSpecial: false, isLight: true } },
                    { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecial: false, isLight: true } }]
                saturday = [
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isLight: true } },
                    { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecial: false, isLight: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'vegetable', isSpecial: true, isLight: true } },
                    { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecial: false, isLight: true } }]
                sunday = [
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecial: true, isLight: true } },
                    { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecial: false, isLight: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', isSpecial: true, isLight: true } },
                    { day: 'sunday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', season: season, isSpecial: false, isLight: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', isSpecial: false, isLight: true } },
                    { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecial: false, isLight: true } }]

                mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                    
                break
        }
        return mealPlan
    }
}

export default data
