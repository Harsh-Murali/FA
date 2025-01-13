function showSection(sectionId) {
    // Hide all sections
    const sections = [
        'start', 'mealPlanChoice', 'specificMealPlan',
        'breakfastDecision', 'breakfastRice', 'breakfastBreadRoti', 'breakfastCereal', 'breakfastBagel', 'breakfastBread',
        'lunchDecision', 'lunchRice', 'lunchPasta',
        'dinnerDecision', 'dinnerRice', 'dinnerPasta', 'dinnerPotato',
        'snacksDecision', 'snacksBread', 'mealDisplay'
    ];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
}

function showMealPlan(planNumber) {
    // Hide all meal plans
    for (let i = 1; i <= 10; i++) {
        document.getElementById('mealPlan' + i).classList.add('hidden');
    }

    // Show the selected meal plan
    document.getElementById('mealPlan' + planNumber).classList.remove('hidden');
}

const mealData = {
    breakfast: {
        'Rice with Chicken': 'Prepare India Gate - Basmati Rice, Sella (50-60g) and Chicken thigh, cooked, skinless (150g). Use Moro - Extra Virgin Olive Oil (5ml) if desired. (Based on Meal Plans 1 & 6)',
        'Rice with Egg Whites': 'Prepare India Gate - Basmati Rice, Sella (100g) and sunny queen farms - 100% egg whites (200g). (Based on Meal Plan 2)',
        'Roti': 'Prepare Roti (80-90g) and Manning Valley - Free Range Eggs (2-3 eggs). Use Moro - Extra Virgin Olive Oil (5ml) if desired. (Based on Meal Plans 3 & 8)',
        'Wholemeal Bread': 'Have Tip Top - The One - Wholemeal (2 slices) and Manning Valley - Free Range Eggs (3-4 eggs). Use Moro - Extra Virgin Olive Oil (5ml) if desired. (Based on Meal Plans 5 & 10)',
        'Weetbix': 'Have Sanitarium - Weetbix (52-60g) and So Good - Soy and Almond milk (150-200ml). You can add sunny queen farms - 100% egg whites (180-200g) for extra protein. (Based on Meal Plans 2 & 7)'
    },
    lunch: {
        'Rice with Chicken': 'Prepare India Gate - Basmati Rice, Sella (90-110g) and Chicken thigh, cooked, skinless (140-150g). You can add Natural - Cashews (20-25g) and/or Green peas, raw (50-60g). (Based on Meal Plans 2, 5, 7, 10)',
        'Rice with Fish': 'Prepare India Gate - Basmati Rice, Sella (90-100g) and The Fishmonger - Basa Fillets Skin Off (250-280g). You can add Natural - Cashews (15-20g). (Based on Meal Plans 4 & 9)',
        'Rice with Tuna': 'Prepare India Gate - Basmati Rice, Sella (80-85g) and Portview (Aldi) - Tuna chunks in oil (130g). You can add Sweet potato, steamed (80-100g). (Based on Meal Plans 3 & 8)',
        'Pasta with Chicken': 'Cook Granoro - Spirali 32 (110-135g) and Chicken thigh, cooked, skinless (150-200g). You can add Green peas, raw (50-60g) or Gourd, bottle, raw (100-120g). (Based on Meal Plans 5, 8, 10)',
        'Pasta with Tuna': 'Cook Granoro - Spirali 32 (140-150g) and Portview (Aldi) - Tuna chunks in oil (130g). Add Avocado (30-40g). (Based on Meal Plans 1 & 6)'
    },
    dinner: {
        'Rice with Fish': 'Prepare India Gate - Basmati Rice, Sella (80-90g) and The Fishmonger - Basa Fillets Skin Off (200-220g). You can add Lettuce (80-100g). (Based on Meal Plans 5 & 10)',
        'Rice with Tuna': 'Prepare India Gate - Basmati Rice, Sella (80-85g) and Portview (Aldi) - Tuna chunks in oil (130g). You can add Sweet potato, steamed (80-100g). (Based on Meal Plans 3 & 8)',
        'Pasta with Fish': 'Cook Granoro - Spirali 32 (90-100g) and The Fishmonger - Basa Fillets Skin Off (200-220g). Use Moro - Extra Virgin Olive Oil (5ml) for cooking or dressing. You can add Broccoli (100g) or Onion (70g). (Based on Meal Plans 2 & 7)',
        'Pasta with Chicken': 'Cook Granoro - Spirali 32 (95-100g) and Chicken thigh, cooked, skinless (150-160g). You can add Carrots (80-100g). (Based on Meal Plans 4 & 9)'
    },
    snacks: {
        'Cereal': 'Have Kelloggs - Sultana Bran Buds - 2023 (40-50g) with So Good - Soy and Almond milk (100-150ml). (Based on Meal Plans 1, 5, 10)',
        'White Bread': 'Have Bakers Life The Best - White bread (2 slices) with coles - Smooth hazelnut spread (10-15g) or Tip Top Bakery - Sunblest Soft White Toast (1-2 slices) with coles - Smooth hazelnut spread (10g). (Based on Meal Plans 1, 2, 6, 7)',
        'Protein Bar': 'Have a Crankt - Salt Caramel Protein Bar (60g). (Based on Meal Plans 4 & 9)',
        'Biscuits/Rice Cakes': 'Have European Biscuit selection - biscuits (30-40g) and/or damora - rice cake (10-15g). (Based on Meal Plans 3 & 8)',
        'Fruit': 'Have Grapes (100g). (Based on Meal Plans 3)'
    }
};

function showMeal(mealType, mealChoice) {
    const description = mealData[mealType][mealChoice];
    document.getElementById('mealType').innerText = mealType + ' - ' + mealChoice;
    document.getElementById('mealDescription').innerText = description;
    showSection('mealDisplay');
}