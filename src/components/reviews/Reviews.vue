<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
        
            <div class=" -m-4">

    
                <div class="flex flex-col text-center w-full mb-8">
                    <h1 class="h1 font-medium title-font mb-4 text-gray-900">レビュー</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-xl">{{ reviews.length }}件の評価/評価平均{{ averageScore }}</p>
                </div>

                <div class="text-gray-600 body-font bg-red-100 rounded-xl h-1/2">
                    <div class="container px-5 py-24   w-full">
                        <div class="flex flex-wrap -m-2 ">
                            <Review 
                                v-for="review in paginatedReviews" 
                                :review="review" 
                                :key="review.id" 
    
                            />
                        </div>
                    </div>
                    <nav class="pagination flex justify-center pb-8">
                        <ul>
                            <li v-if="currentPage > 1">
                                <a @click="paginate(currentPage - 1)">前へ</a>
                            </li>
                            <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                                <a @click="paginate(page)">{{ page }}</a>
                            </li>
                            <li v-if="currentPage < totalPages">
                                <a @click="paginate(currentPage + 1)">次へ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useReviewStore } from '../../stores/review';
import Review from './Review.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter
const store = useReviewStore();

const props = defineProps({
    reviews: Array
})


const currentPage = ref(1); // 現在のページ番号
const itemsPerPage = 6; // 1ページに表示するアイテム数

const paginatedReviews = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return props.reviews.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(props.reviews.length / itemsPerPage);
});

const paginate = (page) => {
    currentPage.value = page;
};

const averageScore = computed(() => {
    if (props.reviews.length === 0) return 0;

    // reduceメソッドで合計を計算
    const totalScore = props.reviews.reduce((accumulator, review) => {
        return accumulator + review.score;
    }, 0);

    return (totalScore / props.reviews.length).toFixed(1); // 平均スコアを小数点1桁で表示
});
</script>

<style>
/* ページネーションスタイルをカスタマイズすることができます */
.pagination {
  text-align: center;
}

.pagination ul {
  list-style: none;
  padding: 0;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
}

.pagination a {
  text-decoration: none;
  padding: 5px 10px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  color: #333;
}

.pagination a:hover {
  background-color: #333;
  color: #fff;
}

.pagination .active a {
  background-color: #333;
  color: #fff;
}
</style>