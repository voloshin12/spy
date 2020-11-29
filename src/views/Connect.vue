<template>
    <div>
        <div class="page-title">
            Подключиться к игре
        </div>
        <form @submit.prevent="">
            <div class="input-group">
                <label>Имя или никнейм</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label>Код игры:</label>
                <input type="text">
            </div>
            <div class="buttons">
                <button type="submit" class="button">Ок</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Connect"
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