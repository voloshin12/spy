<template>
  <div class="home">
      <div class="spy-image">
          <img src="@/assets/spy.png" alt="Spy">
      </div>
      <div class="button-links">
          <div class="button-wrap">
              <router-link to="/create" class="button-link" v-text="$t('message.create_a_game')"/>
          </div>
          <div class="button-wrap">
              <router-link to="/connect" class="button-link" v-text="$t('message.connect_to_the_game')"></router-link>
          </div>
          <div class="button-wrap">
              <router-link to="/settings" class="button-link" v-text="$t('message.settings')"/>
          </div>
          <div class="button-wrap">
              <router-link to="/rules" class="button-link" v-text="$t('message.rules')"/>
          </div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss">
.spy-image{
    margin: 3.646vw 0;
    display: flex;
    justify-content: center;
    height: 260px;
}
.button-wrap{
    margin-bottom: 20px;
}
.button-links{
    padding: 0 15px;
}
.button-link{
    display: inline-block;
    line-height: 50px;
    width: 100%;
    background-color: #232E3C;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
}
a{
    text-decoration: none;
}
</style>
