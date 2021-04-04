<template>
    <!-- Three -->
    <section id="skills" class="spotlight style3 left">
        <span class="image fit main bottom"><img src="images/pic04.jpg" alt="" /></span>
        <div class="content">
            <header>
                <h2>{{data.title}}</h2>
                <p v-if=data.subtitle v-text=data.subtitle></p>
            </header>
            <p v-for="(paragraph, i) in data.descriptions" :key=i>
                {{paragraph.paragraph}}
                <ul v-if=paragraph.items>
                    <li v-for="(item, k) in paragraph.items" :key=k>
                        {{item}}
                    </li>
                </ul>
            </p>
            <ul class="actions" v-if=data.seeMoreRoute>
                <li>
                    <router-link  :to="data.seeMoreRoute" class="button">
                        Ver más
                    </router-link>
                </li>
            </ul>
        </div>
        <a href="#four" class="goto-next scrolly">Next</a>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionThree extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
