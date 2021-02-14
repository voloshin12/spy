import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const locale = 'ua-UK'; // default locale

export default new VueI18n({
    locale,
    messages: {
        'ua-UK': {
            message: {
                create_a_game: 'Створити гру',
                connect_to_the_game: 'Підключитися до гри',
                settings: 'Налаштування',
                rules: 'Правила',
            },
        },
        'ru-RU': {
            message: {
                create_a_game: 'Создать игру',
                connect_to_the_game: 'Подключиться к игре',
                settings: 'Настройки',
                rules: 'Правила',
            },
        },
    },
});
