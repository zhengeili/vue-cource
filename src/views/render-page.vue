<!--  -->
<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{item.name}}</li>
    </ul> -->
     <!-- :render="renderFunc" -->
    <list :list="list">
      <count-to slot="aa" slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data () {
    return {
      // list: [
      //   { name: 'Tom' },
      //   { name: 'Lily' }
      // ]
      list: [
        { number: 100 },
        { number: 45 }
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    handleClick (event) {
      console.log(event)
    },
    // renderFunc (h, name) {
    //   return h('i', {
    //     style: {
    //       color: 'pink'
    //     }
    //   }, name)
    // }
    renderFunc (h, number) {
      // <i on-click={this.handleClick} style={{color: 'pink'}}>{name}</i>
      return (
        <CountTo endVal={number} nativeOn-click={this.handleClick} style={{color: 'pink'}}></CountTo>
      )
    },
    handleEnd () {
      console.log('end!')
    }
  }
}

</script>
<style lang='less'>
  //
</style>
