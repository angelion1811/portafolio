<template>
  <!-- One -->
    <section id="about" class="spotlight style1 bottom">
        <span class="image fit main"><img src="images/pic02.jpg" alt="" /></span>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-4 col-12-medium">
                        <header>
                            <h2>{{data.title}}</h2>
                            <p>{{data.subtitle}}</p>
                        </header>
                    </div>
                    <div class="col-4 col-12-medium" v-for="(paragraph, i) in data.paragraphs" :key=i>
                        <p>{{paragraph}}</p>
                    </div>
                </div>
            </div>
        </div>
        <a href="#two" class="goto-next scrolly">Next</a>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionOne extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
