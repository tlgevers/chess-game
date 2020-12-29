<template>
  <q-page class="flex flex-center">
    <board></board>
  </q-page>
</template>

<script>
import board from 'components/board'
export default {
  name: 'PageIndex',
  components: {
    board
  }
}
</script>
