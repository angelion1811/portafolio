<template>
  <div> 
  	<script src="./landed/assets/js/jquery.min.js"></script>
    <script src="./landed/assets/js/jquery.scrolly.min.js"></script>
    <script src="./landed/assets/js/jquery.dropotron.min.js"></script>
    <script src="./landed/assets/js/jquery.scrollex.min.js"></script>
    <script src="./landed/assets/js/browser.min.js"></script>
    <script src="./landed/assets/js/breakpoints.min.js"></script>
    <script src="./landed/assets/js/util.js"></script>
    <script src="./landed/assets/js/main.js"></script>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExternalScripts extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>