<template>
<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">必要な材料と容量</h1>
        </div>

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="にんじん"
                        v-model="firstFoodIngredient"
                        class="title-font font-medium bg-gray-100">
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <input 
                    type="text" 
                    placeholder="大さじ1"
                    v-model="firstFoodAmount"
                    class="title-font font-medium bg-gray-100">
                </div>
            </div>
        </div>
        
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="にんじん"
                        v-model="secondFoodIngredient"
                        class="title-font font-medium bg-gray-100">
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <input 
                    type="text" 
                    placeholder="大さじ1"
                    v-model="secondFoodAmount"
                    class="title-font font-medium bg-gray-100">
                </div>
            </div>
        </div>

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="にんじん"
                        v-model="thirdFoodIngredient"
                        class="title-font font-medium bg-gray-100">
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <input 
                    type="text" 
                    placeholder="大さじ1"
                    v-model="thirdFoodAmount"
                    class="title-font font-medium bg-gray-100">
                </div>
            </div>
        </div>

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="にんじん"
                        v-model="fourthFoodIngredient"
                        class="title-font font-medium bg-gray-100">
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <input 
                    type="text" 
                    placeholder="大さじ1"
                    v-model="fourthFoodAmount"
                    class="title-font font-medium bg-gray-100">
                </div>
            </div>
        </div>

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="にんじん"
                        v-model="fifthFoodIngredient"
                        class="title-font font-medium bg-gray-100">
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <input 
                    type="text" 
                    placeholder="大さじ1"
                    v-model="fifthFoodAmount"
                    class="title-font font-medium bg-gray-100">
                </div>
            </div>
        </div>
        {{ recipeId }}
        <router-link
        :to="{ name: 'edit_manual', params: { recipeId: recipeId } }"
        >
            <button 
                @click="updateFoods"
                class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                投稿する
            </button>
        </router-link>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </div>
</section>
</template>

<script setup>
import { ref, watch, onMounted, reactive } from "vue";
import { useFoodStore } from "../../stores/food";
import { useRouter } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

const store = useFoodStore()
const { handleUpdatedFood } = store

const emit = defineEmits(["updated"]);

const props = defineProps({
    foods: Array,
})

// パラメーターの取得
const router = useRouter();
const route = router.currentRoute;
const recipeId = route.value.params.recipeId;
console.log(recipeId)

const firstFoodId = ref(''); 
const firstFoodIngredient = ref('');
const firstFoodAmount = ref('');

const secondFoodId = ref(''); 
const secondFoodIngredient = ref('');
const secondFoodAmount = ref('');

const thirdFoodId = ref(''); 
const thirdFoodIngredient = ref('');
const thirdFoodAmount = ref('');

const fourthFoodId = ref(''); 
const fourthFoodIngredient = ref('');
const fourthFoodAmount = ref('');

const fifthFoodId = ref(''); 
const fifthFoodIngredient = ref('');
const fifthFoodAmount = ref('');

watch(props, (newProps) => {
    const { foods } = newProps;
    const [food1 = {}, food2 = {}, food3 = {}, food4 = {}, food5 = {}] = foods;

    firstFoodId.value = food1.id || '';
    firstFoodIngredient.value = food1.ingredient || '';
    firstFoodAmount.value = food1.amount || '';

    secondFoodId.value = food2.id || '';
    secondFoodIngredient.value = food2.ingredient || '';
    secondFoodAmount.value = food2.amount || '';

    thirdFoodId.value = food3.id || '';
    thirdFoodIngredient.value = food3.ingredient || '';
    thirdFoodAmount.value = food3.amount || '';

    fourthFoodId.value = food4.id || '';
    fourthFoodIngredient.value = food4.ingredient || '';
    fourthFoodAmount.value = food4.amount || '';

    fifthFoodId.value = food5.id || '';
    fifthFoodIngredient.value = food5.ingredient || '';
    fifthFoodAmount.value = food5.amount || '';
}, { deep: true });

const updateFoods = async (event) => {
    const foods = [
        {
            id: firstFoodId.value,
            ingredient: firstFoodIngredient.value,
            amount: firstFoodAmount.value,
        },
        {
            id: secondFoodId.value,
            ingredient: secondFoodIngredient.value,
            amount: secondFoodAmount.value,
        },
        {
            id: thirdFoodId.value,
            ingredient: thirdFoodIngredient.value,
            amount: thirdFoodAmount.value,
        },
        {
            id: fourthFoodId.value,
            ingredient: fourthFoodIngredient.value,
            amount: fourthFoodAmount.value,
        },
        {
            id: fifthFoodId.value,
            ingredient: fifthFoodIngredient.value,
            amount: fifthFoodAmount.value,
        },
    ];

    for (const food of foods) {
        handleUpdatedFood(food);
    }

    emit("updated", foods);
};
</script>