<template>
  <!-- Two -->
    <section id="experience" class="spotlight style2 right">
        <span class="image fit main"><img :src="data.picture" alt="" /></span>
        <div class="content">
            <header>
                <h2>{{data.title}}</h2>
                <p>{{data.subtitle}}</p>
            </header>
            <p v-for="(paragraph,i) in data.paragraphs" :key=i>
                {{paragraph}}
            </p>
            <ul class="actions" v-if=data.seeMoreRoute>
                <li>
                    <router-link  :to="data.seeMoreRoute" class="button">
                        Ver más
                    </router-link>
                </li>
            </ul>
        </div>
        <a href="#skills" class="goto-next scrolly">Next</a>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>