<template>
    <div>
        <router-view />
        <div class="page-title">
            Создать игру
        </div>
        <form @submit.prevent="createGame" class="options">
            <div class="input-group">
                <label>Имя или никнейм</label>
                <input type="text" v-model="name" />
            </div>
            <div class="option">
                <div class="option-info">
                    <div class="option-title">Количество игроков</div>
                    <div class="option-desc">Общее количкество игроков</div>
                    <div class="btn-nav">
                        <button
                            type="button"
                            @click="players === 3 ? players : players--"
                        >
                            -1
                        </button>
                        <button type="button" @click="players++">+1</button>
                    </div>
                </div>
                <div class="option-nav">
                    {{ getPlayers }}
                </div>
            </div>
            <div class="option">
                <div class="option-info">
                    <div class="option-title">Количество шпионов</div>
                    <div class="option-desc">Из общего количества игроков</div>
                    <div class="btn-nav">
                        <button
                            type="button"
                            @click="spies === 1 ? spies : spies--"
                        >
                            -1
                        </button>
                        <button
                            type="button"
                            @click="spies < players - 2 ? spies++ : spies"
                        >
                            +1
                        </button>
                    </div>
                </div>
                <div class="option-nav">
                    {{ getSpies }}
                </div>
            </div>
            <button type="submit" class="button">Начать</button>
        </form>
    </div>
</template>

<script>
import { post, update, get } from '@/api';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Create',
    computed: {
        getPlayers() {
            return this.players;
        },
        getSpies() {
            return this.spies;
        },
        ...mapGetters(['LOCATION']),
    },
    watch: {
        players: function (val) {
            this.CHANGE_PLAYERS(val)
        }
    },
    methods: {
        async createGame() {
            try {
                const response = await post('/games', {
                    Players: this.players,
                    Spies: this.spies,
                });
                const id = `${response.id}${(~~(Math.random() * 1e2)).toString(
                    16
                )}`;
                await update(`/games/${response.id}`, {
                    slug: id,
                    Players_name: [{ name: this.name }],
                    location: {
                        id: this.LOCATION,
                    },
                });
                this.CHANGE_CURRENT_GAME(id);
                this.CHANGE_PLAYERS_ALL(this.players + this.spies);
                await this.$router.push(`create/${id}`);
            } catch (error) {
                alert(error);
            }
        },
        async getLocations() {
            const response = await get('/locations');
            this.CHANGE_LOCATIONS(response);
        },
        ...mapActions([
            'CHANGE_CURRENT_GAME',
            'CHANGE_PLAYERS_ALL',
            'CHANGE_LOCATIONS',
            'CHANGE_PLAYERS',
            'CHANGE_SPIES'
        ]),
    },
    data: function () {
        return {
            players: 3,
            spies: 1,
            name: '',
        }
    },
    async mounted() {
        await this.getLocations();
        this.CHANGE_PLAYERS(this.players)
        this.CHANGE_SPIES(this.spies)
    },
};
</script>

<style scoped lang="scss">
.option {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(#ffffff, 0.1);
    padding-bottom: 20px;
}
.option-info {
    color: #ffffff;
    padding-right: 10px;
}
.option-title {
    font-size: 18px;
    margin-bottom: 5px;
}
.option-desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 15px;
}
.option-nav {
    min-width: 30px;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: #ffffff;
}
.btn-nav {
    display: flex;
    button {
        width: 40px;
        height: 30px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(#fff, 0.9);
        margin-right: 10px;
        font-size: 14px;
    }
}
label.option {
    &:hover {
        cursor: pointer;
    }
}
.input {
    width: 30px;
    height: 30px;
}
</style>