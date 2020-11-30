export default {
    state: {
        current_game: null,
        location: null,
        players_all: [],
        locationsID: [],
        locations: [],
        roles: [],
        players: null,
        spies: null,
    },
    actions: {
        CHANGE_CURRENT_GAME: ({ commit }, current_game) => {
            commit('SET_CURRENT_GAME', current_game);
        },
        CHANGE_PLAYERS_ALL: ({ commit }, players_all) => {
            commit('SET_PLAYERS_ALL', players_all);
        },
        CHANGE_LOCATIONS: ({ commit }, locations) => {
            commit('SET_LOCATIONS_AND_ID', locations);
            commit('SET_LOCATION');
            commit('SET_ROLES', locations);
        },
        CHANGE_PLAYERS: ({ commit }, payers) => {
            commit('SET_PLAYERS', payers);
        },
        CHANGE_SPIES: ({ commit }, spies) => {
            commit('SET_SPIES', spies);
        },
    },
    mutations: {
        SET_SPIES: (state, spies) => {
            state.spies = spies;
        },
        SET_PLAYERS: (state, payers) => {
            state.players = payers;
        },
        SET_CURRENT_GAME: (state, current_game) =>
            (state.current_game = current_game),
        SET_PLAYERS_ALL: (state, players_all) =>
            (state.players_all = players_all),
        SET_LOCATIONS_AND_ID: (state, locations) => {
            const locations_id = [];
            for (let i = 0; i < locations.length; i++) {
                locations_id.push(locations[i].id);
            }
            state.locationsID = locations_id;
            state.locations = locations;
        },
        SET_LOCATION: state => {
            state.location =
                state.locationsID[
                    Math.floor(Math.random() * state.locationsID.length)
                ];
        },
        SET_ROLES: state => {
            let role = [];
            state.locations.filter((el, i, arr) => {
                if (arr[i].id === state.location) {
                    console.log(el);
                }
            });
        },
    },
    getters: {
        CURRENT_GAME: state => state.current_game,
        PLAYERS_ALL: state => state.players_all,
        LOCATION: state => state.location,
    },
};
