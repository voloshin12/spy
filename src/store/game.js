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
        role_random: {},
        role: null,
    },
    actions: {
        CHANGE_CURRENT_GAME: ({ commit }, current_game) => {
            commit('SET_CURRENT_GAME', current_game);
        },
        CHANGE_PLAYERS_ALL: ({ commit }, payload) => {
            commit('SET_PLAYERS_ALL', payload.players + payload.spies);
            commit('SET_ROLES', payload);
        },
        CHANGE_LOCATIONS: ({ commit }, locations) => {
            commit('SET_LOCATIONS_AND_ID', locations);
            commit('SET_LOCATION');
        },
        CHANGE_PLAYERS: ({ commit }, payers) => {
            commit('SET_PLAYERS', payers);
        },
        CHANGE_SPIES: ({ commit }, spies) => {
            commit('SET_SPIES', spies);
        },
        CHANGE_ROLE: ({ commit }, role) => {
            commit('SET_ROLE', role);
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
        SET_ROLES: (state, payload) => {
            let role = [];
            state.locations.filter((el, i, arr) => {
                if (arr[i].id === state.location) {
                    role = [...el.role];
                }
            });
            const common_user = role[0].name;

            let role_result = [];
            for (let i = 0; i < payload.players; i++) {
                if (role[i]) {
                    role_result.push(role[i].name);
                } else {
                    role_result.push(common_user);
                }
            }
            for (let i = 0; i < payload.spies; i++) {
                role_result.push('Шпион');
            }
            shuffle(role_result);
            let mewRole = [];
            for (let i = 0; i < role_result.length; i++) {
                mewRole.push({ text: role_result[i] });
            }
            state.role_random = mewRole;
        },
        SET_ROLE: (state, role) => {
            state.role = role;
        },
    },
    getters: {
        CURRENT_GAME: state => state.current_game,
        PLAYERS_ALL: state => state.players_all,
        LOCATION: state => state.location,
        ROLE_RANDOM: state => state.role_random,
        ROLE: state => state.role,
    },
};

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
