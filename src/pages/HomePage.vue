<template>
<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">

        <div class="flex flex-col text-center  mb-20 bg-red-50 w-1/2 lg:w-1/3  mx-auto py-8 rounded-lg">
            <h3 class="lg:w-2/3 mx-auto leading-relaxed  text-gray-500 font-bold sm:text-2xl text-lg">会員登録済みの方</h3>
            <div class="flex mx-auto border-2 border-pink-500 rounded overflow-hidden mt-6">
                <router-link :to="{ name: 'login' }"
                class="py-1 px-4 bg-pink-500 text-white focus:outline-none hover:bg-pink-600"
                >
                ログインする
                </router-link>
            </div>
        </div>

    <h1 class="sm:text-4xl text-3xl font-medium title-font  text-gray-900 text-center mb-14">コース案内</h1>
        <div class="flex flex-wrap -m-4 justify-center  w-full">
        <div class="p-4 xl:w-1/3 md:w-1/2  w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">無料</h2>
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">0円</h1>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>会員登録なし
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>レシピを閲覧(制限あり）
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">レシピを閲覧する
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            </div>
        </div>
        <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-pink-500 flex flex-col relative overflow-hidden">
            <span class="bg-pink-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">人気上昇中！</span>
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">プレミアム</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>480円</span>
                <span class="text-lg ml-1 font-normal text-gray-500">/月</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>全てのレシピが見放題
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>レシピの絞り込み検索が使える
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>レシピをお気に入り登録
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>レシピ投稿機能
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>栄養成分グラフ
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>掲示板機能(栄養士も解答)
            </p>
            <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3 bg-pink-500" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>栄養士に相談(+料金)
            </p>
            <router-link :to="{ name: 'register' }"
            class="flex items-center mt-auto text-white bg-pink-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-600 rounded"
            >
                有料会員登録する
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </router-link>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script setup>
const iframeSrc = 'https://bot.dialogflow.com/40fce196-3e19-4a7b-b8dd-82b5bc0a143a'
</script>