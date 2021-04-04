<template>
    <!-- Five -->
    <section id="contact" class="wrapper style2 special fade">
        <div class="container">
            <header>
                <h2>{{data.title}}</h2>
                <p>{{data.subtitle}}</p>
            </header>
            <p v-for="(paragraph, i) in data.descriptions" :key=i>
                {{paragraph.paragraph}}
                <ul v-if=paragraph.items>
                    <li v-for="(item, k) in paragraph.items" :key=k>
                        {{item}}
                    </li>
                </ul>
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionFifth extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
