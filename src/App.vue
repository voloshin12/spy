<template>
    <div id="app">
        <main>
            <Header/>
            <div class="container">
                <div class="page">
                    <router-view />
                </div>
            </div>

        </main>
        <Footer/>
    </div>
</template>

<style lang="scss">
@import "~normalize-scss";
@include normalize();
*{
    box-sizing: border-box;
}
#app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #17212B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
a{
    text-decoration: none;
}
.container{
    max-width: 335px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
.page{
    margin: 30px 0;
}
.page-title{
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 20px;
}
button {
    background-color: rgba(#000, 0);
    border: 0;
    &:hover {
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    components: {Footer, Header}
}
</script>