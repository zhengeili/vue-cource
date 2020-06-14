<!--  -->
<template>
  <div>
    name:{{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'linson'
    }
  },
  beforeRouteUpdate (to, from, next) {
    //
    console.log(to.name, from.name)
  }
}

</script>
