<template>
    <div class="d-flex row">
        <div class="col-sm-12 mx-auto" style="font-weight: bolder">
          <nav pills class="d-flex mx-2 justify-content-center align-items-center">
            <router-link  to="/"  class="nav-item nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
            <router-link to="access-token" class="nav-item nav-link">Access Token</router-link>
            <router-link to="register-url" class="nav-item nav-link">Register URL</router-link>
            <router-link to="simulate-transaction" class="nav-item nav-link">Simulate Transaction</router-link>
            <router-link to="b2c" class="nav-item nav-link">B2C</router-link>
            <router-link to="stk" class="nav-item nav-link">STK Push</router-link>
            <router-link to="transaction-status" class="nav-item nav-link">Transaction Status</router-link>
            <router-link to="reverse-transaction" class="nav-item nav-link">Reverse Transaction</router-link>
          </nav>
        </div>
    </div>
</template>
<script setup lang="js">

</script>
<style scoped>
.nav-link {
  cursor: pointer;
  margin: 12px;
}

.router-link-active {
  font-weight: bold;
  background-color: #355b11;
  padding: 5px 12px;
  border-radius: 5px;
  color: white;
}

.router-link-active:hover{
  border-bottom: 3px solid #ffa600;
  color: white;
}
</style>