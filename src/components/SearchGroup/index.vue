<template lang="pug">
.search-group
  vs-row(justify="flex-start")
    vs-col(
      v-for="(input, index) in formList"
      :key="index"
      :lg="2"
      :sm="4"
      :xs="12"
    )
      template(v-if="input.inputType === 'select'")
        vs-select(
          v-model="input.value"
          :type="input.inputType"
          :label="input.label"
          :placeholder="input.placeholder"
        )
          vs-option(
            v-for="option in input.options"
            :key="option"
            :label="option"
            :value="option"
          ) {{ option }}
      template(v-else-if="input.inputType === 'date'")
        vs-input(
          v-model="input.value"
          type="date"
          :label="input.label"
          :placeholder="input.placeholder"
        )
      template(v-else)
        vs-input(
          v-model="input.value"
          :type="input.inputType"
          :label="input.label"
        )
    vs-button(icon @click="$emit('search', formList)")
      i.bx.bx-search
</template>

<script>
export default {
  name: 'SearchGroup',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      formList: []
    }
  },
  created () {
    this.formList = JSON.parse(JSON.stringify(this.data))
  },
  mounted () {
    setInterval(() => {
      console.log(this)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
</style>
