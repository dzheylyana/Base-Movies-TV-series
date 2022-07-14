<template>
  <header>
    <nav class="navbar navigation">
      <div class="leftSide">
       <router-link to="/"> <img src="../assets/Image.png" class="logo" /></router-link>
        <form @submit.prevent="searching" class="form-search form-inline">
          <input type="text" class="search-query" placeholder="Search..." v-model="searchWord"/>

         </form>
      </div>
      <div class="rightSide">
        <i class="fa fa-plus"></i>
        <div class="notification">
          <i class="fa fa-bell"></i>
          <i class="fa fa-circle"></i>
        </div>
         <img src="../assets/img_avatar.png" class="avatar" alt="Avatar" />
        <h6>Dzheylyana Vrancheva</h6>
        <i class="fa fa-angle-down"></i>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  data () {
    return { searchWord: '' }
  },

  methods: {
    searching () {
      this.$router.push({ name: 'search', params: { query: this.searchWord } })
    }
  }

}
</script>

<style scoped>
.navigation {
  justify-content: space-between;
}
.leftSide {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.rightSide {
  display: flex;
  flex-direction: row;
  align-items: center;
}
i.fa.fa-angle-down::before {
  font-size: 18px;
}
h6 {
  font-size: 18px;
  margin: 0 35px 0 24px;
}
.avatar {
  vertical-align: middle;
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

.notification {
  display: flex;
  flex-direction: row;
  margin-right: 50.8px;
  align-items: flex-start;
  position: relative;
}
i.fa.fa-circle::before {
  font-size: 9px;
  margin-left: -5px;
  position: absolute;
  top: 0;
  color: green;
}

i.fa.fa-plus::before {
  margin-right: 45px;
  font-size: 16px;
}
i.fa.fa-bell::before {
  font-size: 20px;
}

.logo {
  width: 121px;
  height: 90px;
}
header {
  background: #182131 0% 0% no-repeat padding-box;
  border-radius: 0px 8px 8px 0px;
  opacity: 0.91;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
}
.search-query {
  width: 398px;
  height: 52px;
  padding-left: 26px;
  border-radius: 25px;
  background: #ffffff51 0% 0% no-repeat padding-box;
  border-radius: 30px;
  opacity: 0.3;
}
input::placeholder {
  font: normal normal 300 22px/38px SF Pro Text;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

form.form-search {
  position: relative;
}

form.form-search:before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background-image: url(http://getbootstrap.com/2.3.2/assets/img/glyphicons-halflings.png);
  background-position: -48px 0;
  position: absolute;
  top: 17px;
  right: 8px;
  opacity: 0.99;
  z-index: 20000;
}
</style>
