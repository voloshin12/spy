<template>
    <div>
        <div class="page-title">
            Код игры:
        </div>
        <form @submit.prevent="">
            <div class="input-group">
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

<style scoped lang="scss">
input{
    width: 100%;
    height: 30px;
    background-color: rgba(#000, 0);
    border: 0;
    border-bottom: 1px solid rgba(#fff, 0.9);
    color: #ffffff;
    padding: 0;
    &:focus{
        outline: none;
    }
}
.buttons{
    display: flex;
    padding: 15px 0;
    flex-wrap: wrap;
}
.button{
    color: #ffffff;
    background-color: #232E3C;
    padding: 10px 15px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
}
</style>