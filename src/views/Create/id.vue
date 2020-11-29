<template>
    <div>
        <div class="page-title">
            Онлайн раздача
        </div>
        <div class="info">
            <div class="title-game">Код игры: <span v-text="CURRENT_GAME" /></div>
            Ожидание игроков
            <div class="title-game">
                1 из {{PLAYERS_ALL}}
            </div>
            Сообщите этот код всем игрокам
        </div>
        <button class="button">Обновить статут</button>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'id',
    computed: {
        ...mapGetters(['CURRENT_GAME','PLAYERS_ALL']),
    },
};
</script>

<style scoped lang="scss">
.info{
    color: #ffffff;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.7;
}
.title-game{
    font-size: 23px;
    margin-bottom: 20px;
    span{
        color: #ffc04d;
        font-weight: 700;
    }
}
</style>