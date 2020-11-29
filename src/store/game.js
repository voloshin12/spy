export default {
    state: {
        current_game: '',
        players_all: null,
    },
    actions: {
        CHANGE_CURRENT_GAME: ({ commit }, current_game) => {
            commit('SET_CURRENT_GAME', current_game);
        },
        CHANGE_PLAYERS_ALL: ({ commit }, players_all) => {
            commit('SET_PLAYERS_ALL', players_all);
        },
    },
    mutations: {
        SET_CURRENT_GAME: (state, current_game) =>
            (state.current_game = current_game),
        SET_PLAYERS_ALL: (state, players_all) =>
            (state.players_all = players_all),
    },
    getters: {
        CURRENT_GAME: state => state.current_game,
        PLAYERS_ALL: state => state.players_all,
    },
};
