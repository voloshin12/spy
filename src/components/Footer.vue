<template>
    <footer>
        <div class="container">
            <div class="text">
                Made with <img src="@/assets/heart.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
.text{
    text-align: center;
    color: rgba(#ffffff, 0.8);
}
footer{
    line-height: 50px;
}
img{
    width: 15px;
}
</style>