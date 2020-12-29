<template>
  <div
    class="q-pa-lg"
    >
    <div
      class="row"
      v-bind:class="r"
      v-for="r in rows"
      v-bind:key="r"
    >
      <div
        class="square"
        v-bind:class="c"
        v-for="c in columns"
        v-bind:key="c"
      >
        <i
          v-bind:class="positions[r+c] ? positions[r+c].icon : ''"
          class="piece"
         ></i>
      <!-- <div class="label">{{r+c}}</div> -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      columns: ['1', '2', '3', '4', '5', '6', '7', '8'],
      positions: {},
      test: { A1: 'fas fa-chess-rook fa-lg' }
    }
  },
  mounted () {
    this.$store.dispatch('positions/getPositions').then(res => {
      this.positions = this.$store.state.positions.positions
      console.log('positions', this.positions)
    })
  }
}
</script>

<style lang="stylus">
  .piece {
    position: relative;

  }
  .square {
    position: relative;
    text-align: center;
    /* border: 1px solid grey; */
    height: 50px;
    width: 50px;
    margin: 0;
    padding-top: 10px;
  }
  .square:hover {
    opacity: 0.8;
    background: #ffb895 !important;
    cursor: pointer;
  }
  .label {
    color: grey;
    position: relative;
    bottom: 0px;
    float: right;
    clear: both;
  }
  .A div:nth-child(even), .C div:nth-child(even), .E div:nth-child(even), .G div:nth-child(even) {
    background-image: url("../assets/dark-grain.jpeg");
    margin: 0;
  }
  .A div:nth-child(odd), .C div:nth-child(odd), .E div:nth-child(odd), .G div:nth-child(odd) {
    background-image: url("../assets/light-grain.jpeg");
    margin: 0;
  }
  .B div:nth-child(odd), .D div:nth-child(odd), .F div:nth-child(odd), .H div:nth-child(odd) {
    background-image: url("../assets/dark-grain.jpeg");
    margin: 0;
  }
  .B div:nth-child(even), .D div:nth-child(even), .F div:nth-child(even), .H div:nth-child(even) {
    background-image: url("../assets/light-grain.jpeg");
    margin: 0;
  }
</style>
