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

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {Footer, Header}
}
</script>

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
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
}
.page{
    margin: 30px 0;
}
.page-title{
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 20px;
}
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
.input-group{
    margin-bottom: 20px;
    label{
        color: rgba(#fff, 0.8);
        margin-bottom: 5px;
        display: block;
    }
}
.button{
    color: #2c3e50;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 15px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    border-radius: 3px;
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
