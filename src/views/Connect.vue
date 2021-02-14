<template>
    <div>
        <div class="page-title" v-text="`Подключиться к игре`"/>
        <div v-if="ROLE">
            <span v-text="`Ваша роль:`"/>
            <div v-html="ROLE"/>
        </div>
        <form v-if="!ROLE" @submit.prevent="getGame">
            <div class="input-group">
                <label for="input-name" v-text="`Имя или никнейм`"/>
                <input id="input-name" type="text" v-model="name">
            </div>
            <div class="input-group">
                <label for="input-key" v-text="`Код игры:`"/>
                <input id="input-key" type="text" v-model="codeId">
            </div>
            <div class="buttons">
                <button type="submit" class="button" v-text="`Ок`"/>
                <router-link to="/" class="button" v-text="`Отмена`"/>
            </div>
        </form>
    </div>
</template>

<script>
import {get, update} from '@/api'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "viewsConnect",
    data() {
        return {
            codeId: ''
        };
    },
    watch: {
        name () {
            localStorage.setItem('nameGamer', this.name)
        }
    },
    computed: {
        ...mapGetters(['ROLE']),
        name() {
            return localStorage.getItem('nameGamer')
        }
    },
    methods: {
        ...mapActions(['CHANGE_ROLE']),
        async getGame() {
            const response = await get(`/games`,{slug: this.codeId})
            const idGame = response[0].id
            const poles_random = response[0].poles_random

            for (let i = 0; i < poles_random.length; i++) {
                if (!poles_random[i].name) {
                    poles_random[i].name = this.name
                    this.CHANGE_ROLE(poles_random[i].text)
                    break;
                }
            }
            await update(`/games/${idGame}`, {
                poles_random: poles_random,
            });
        },
    }

}
</script>

<style lang="scss">
.buttons{
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    .button{
        width: 45%;
    }
}

</style>