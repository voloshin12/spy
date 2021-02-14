<template>
    <header>
        <div class="header-fix">
            <div class="container">
                <div class="header-wrap">
                    <div class="header-item">
                        <router-link
                            to="/"
                            class="link-back"
                            v-bind:class="{ hide: ButtonBackStatus }"
                            ><img src="@/assets/arrow.svg"
                        /></router-link>
                    </div>
                    <div class="header-item">
                        <div class="logo">
                            <h1>SPYPLAY</h1>
                        </div>
                    </div>
                    <div class="header-item header-btn-dots">
                        <button class="btn-dots">
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        ButtonBackStatus() {
            if (this.$route.path === '/') {
                return true;
            }
        },
    },
};
</script>

<style scoped lang="scss">
header {
    height: 50px;
}
.hide {
    display: none !important;
}
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.header-item {
    width: 33.3%;
}
.header-btn-dots {
    display: flex;
    justify-content: flex-end;
}
.btn-dots {
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
    span {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #fff;
    }
    &:focus {
        outline: none;
    }
}
.header-fix {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background: #182533;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h1 {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
}
.link-back {
    width: 20px;
    display: inline-block;
}
</style>