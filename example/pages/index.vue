<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('🌞 window', window)
    console.log('google', this.$google)

    setTimeout(() => {
      console.log('🌞 this.$google', this.$google)
    }, 5000)
  }
}
</script>
