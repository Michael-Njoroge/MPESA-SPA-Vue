<template>
  <footer class="main-footer">
     <p>&copy; 2024 <strong>Michael Njoroge.</strong> All rights reserved.</p>
      <p class="ms-2">
        <a href="https://www.linkedin.com/in/michael-njoroge-552a1a265/" target="_blank" class="text-dark"><strong>LinkedIn</strong></a>&nbsp; | &nbsp;
        <a href="https://github.com/Michael-Njoroge" target="_blank" class="text-dark"><strong>GitHub</strong></a>
      </p>
  </footer>
</template>

<script>
export default {
data() {
  return {
    currentYear: new Date().getFullYear() 
  };
},
methods: {
 
},
};
</script>

<style scoped>
  .main-footer{
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    right: 0;
    z-index: 1032;
  }
</style>
