<template>
    <div>
        <div class="page-title">
            Подключиться к игре
        </div>
        <div v-if="ROLE">
            Ваша роль:
            <div v-html="ROLE"/>
        </div>
        <form v-if="!ROLE" @submit.prevent="getGame">
            <div class="input-group">
                <label>Имя или никнейм</label>
                <input type="text" v-model="name">
            </div>
            <div class="input-group">
                <label>Код игры:</label>
                <input type="text" v-model="codeId">
            </div>
            <div class="buttons">
                <button type="submit" class="button">Ок</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {get, update} from '@/api'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "Connect",
    watch: {
        name () {
            localStorage.setItem('nameGamer', this.name)
        }
    },
    methods: {
        async getGame() {
            let response = await get(`/games`,{slug: this.codeId})
            let idGame = response[0].id
            let poles_random = response[0].poles_random
            console.log(idGame)
            console.log(poles_random)
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
        ...mapActions(['CHANGE_ROLE'])
    },
    computed: {
        ...mapGetters(['ROLE'])
    },
    data: function() {
        return {
            name: localStorage.getItem('nameGamer'),
            codeId: ''
        };
    },
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