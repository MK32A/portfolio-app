<template>

    <div v-if="store.isLoggedIn" class="reactive text-gray-600 body-font bg-red-100 reactive md:h-28 xl:h-36">

      
      <div class="flex justify-center py-4 mx-auto w-full xl:w-4/5 relative "  >
        <a href="http://localhost:5173/top" 
          class="absolute md:left-2 md:top-2 lg:top-10 lg:left-2  xl:top-4 xl:-left-10 flex items-center justify-center"
        >
          <img class="xl:w-2/3 lg:w-62 md:w-60 " src="../../public/logo.png">
        </a>
        <RecipeSearch class="xl:-right-10 lg:-right-6 lg:top-4"  />

        <div class="ml-6 flex items-center justify-center absolute right-20 lg:top-12  w-40 h-14">
          <img 
          @click="pullDown"
          class="rounded-full h-14 w-14 lg:w-20 lg:h-20 cursor-pointer"
          v-if="store.user && store.user.filename" :src="'http://localhost:8000/profile_images/' + store.user.filename"
          />
    
          <div class="absolute top-12 w-40 items-center z-40">
            <div v-if="isPullDownVisible" class="bg-pink-50 shadow-md rounded mt-7 p-2 ">
              <a href="#" @click.prevent="logout"
                class="flex items-center justify-center border-b-2 border-gray-300 border-opacity-30 py-2">
                ログアウト
              </a>
              <router-link 
                :to="{ name: 'change_password' }"
                class="flex items-center justify-center border-b-2 border-gray-300 border-opacity-30 py-2"
                >
                パスワード変更
              </router-link>
              <router-link 
                :to="{ name: 'user_profile' }"
                class="flex items-center justify-center py-2"
                >
                プロフィールを編集する
            </router-link>
            </div>
          </div>
        </div>

      </div>
        <div class="md:mr-auto md:absolute md:right-40 xl:right-0 xl:top-2 md:top-16 ml:right-0  flex flex-wrap  mx-auto justify-center text-xl pt-10 xl:relative w-full">
          <nav 
            v-if="store.isLoggedIn"
            class="absolute -bottom-2">
            <router-link 
              :to="{ name: 'top' }"
              class="mr-5  hover:text-pink-600 hover:border-b-2  border-pink-400"
              >
              レシピを検索する
            </router-link>
            <router-link 
              :to="{ name: 'new_recipe' }"
              class="mr-5  hover:text-pink-600 hover:border-b-2 border-pink-400"
              >
              レシピを投稿する
            </router-link>
            <router-link 
              :to="{ name: 'my_recipes' }"
              class="mr-5 hover:text-pink-600 hover:border-b-2 border-pink-400"
              >
              投稿したレシピ
            </router-link>
            <router-link 
              :to="{ name: 'likes' }"
              class="mr-5 hover:text-pink-600 hover:border-b-2 border-pink-400"
              >
              お気に入りレシピ
            </router-link>

          </nav>

        </div>
        
      </div>

      <div
        v-if="!store.isLoggedIn"
          class=" mx-auto relative bg-red-100 h-28 "
        >
        <div class=" h-full w-2/3  sm:flex mx-auto sm:relative ">
          <div class="absolute left-0 top-2 sm:top-2 bottom-6 px-6  sm:px-0">
            <a href="http://localhost:5173" class="flex title-font font-medium  text-gray-900 ">
              <img class="sm:w-2/3 w-48 " src="../../public/logo.png">
            </a>
          </div>

          <nav class="absolute right-0 bottom-6 px-6 sm:px-0" >
            <router-link :to="{ name: 'login' }" class="inline-flex text-xs sm:text-sm md:text-base items-center lg:text-lg  bg-pink-500 border-0 py-2 mr-2 px-4 text-white focus:outline-none hover:bg-pink-600 rounded md:mt-0">
              ログイン
            </router-link>
            <router-link :to="{ name: 'register' }" class="inline-flex text-xs sm:text-sm md:text-base lg:text-lg items-center bg-pink-500 border-0 py-2 px-3 focus:outline-none text-white hover:bg-pink-600 rounded md:mt-0">
              有料会員登録
            </router-link>
          </nav>
        </div>
      </div>
        
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import RecipeSearch from './RecipeSearch.vue';


const router = useRouter
const store = useAuthStore()
const isPullDownVisible = ref(false);

const pullDown = () => {
  isPullDownVisible.value = !isPullDownVisible.value;
}
const logout = async () => {
  const confirmed = window.confirm('本当にログアウトしますか？'); // アラートメッセージを表示

  if (confirmed) {
    await store.handleLogout();
    router.push({ name: 'login' });
  } else {
    // ユーザーがキャンセルした場合の処理
    // キャンセル時に行うべきアクションをここに記述します
  }
}

// const logout = async () => {
//   await store.handleLogout()
//   router.push({ name: 'login' })
// }
</script>
