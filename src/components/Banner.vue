<template>
    <!-- Banner -->
    <section id="banner">
        <div class="content">
            <header>
                <h2>{{banner.title}}</h2>
                <p v-for = "description in banner.descriptions" :key="description">
                    {{description}} <br> 
                </p>
            </header>
            <span class="image"><img :src="banner.picture" alt="" /></span>
        </div>
        <a href="#one" class="goto-next scrolly">Next</a>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
    @Prop() private banner: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

