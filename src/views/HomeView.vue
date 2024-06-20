<template>
  <h1>This is home view</h1>
</template>
<script>
export default {
  created() {
    const token = localStorage.token
    if(!token){
        this.$router.push('/login')
    }
  },
};
</script>
