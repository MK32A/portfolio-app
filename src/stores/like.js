import { ref, reactive, computed, watchEffect, watch } from "vue";
import { defineStore } from "pinia";
import { useRoute, useRouter } from 'vue-router';
import { allLikes, createLike, updateLike, removeLike,} from "../http/like-api";

export const useLikeStore = defineStore('likeStore', () => {
    const likes = ref([]);
    const route = useRoute()

    // 全件取得
    const fetchAllLikes = async () => {
        const { data } = await allLikes();
        likes.value = data.data;

    }

    let urlParameterRecipeId = route.params.recipeId;

    const likesCount = computed(() => {
        return likes.value.filter(like => like.recipe_id === Number(urlParameterRecipeId)).length;
    });

    // データ追加
    const handleAddedLike = async (newLike) => {
        try{
            const { data: createdLike } = await createLike(newLike);
            likes.value.unshift(createdLike.data);

            console.log('成功');

        } catch (error) {
            console.error("API リクエストエラー", error);
        }
    }

    const handleRemovedLike = async (like) => {
        try {
            await removeLike(like.id);
            const index = likes.value.findIndex(item => item.id === like.id);
            console.log('削除成功');
            if (index !== -1) {
                likes.value.splice(index, 1);
                console.log('削除成功');
            } else {
                console.warn('削除対象が見つかりませんでした');
            }
        } catch (error) {
            console.error('API リクエストエラー', error);
        }
    };

    

    return {
        likes,
        fetchAllLikes,
        handleAddedLike,
        handleRemovedLike,
        likesCount,
    }
});