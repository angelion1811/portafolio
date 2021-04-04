<template>
  <!-- Four -->
    <section id="portafolio" class="wrapper style1 special fade-up">
        <div class="container">
            <header class="major">
                <h2>{{data.title}}</h2>
                <p>{{data.subtitle}}</p>
            </header>
            <div class="box alt">
                <div class="row gtr-uniform" >
                    <section    v-for="(section, i) in data.descriptions" 
                                class="col-4 col-6-medium col-12-xsmall"
                                :key=i>
                        <span v-if="!section.personIcon" :class="'icon solid alt major '+section.icon">
                        </span>
                        <span v-else class="icon solid alt major">
                            <i  :class="section.personIcon" style=" font-size:2.30em;"></i>
                        </span>
                        <h3>{{section.title}}</h3>
                        <p>{{section.description}}</p>
                         <footer class="major" >
                            <ul class="actions special" v-if=section.seeMoreRoute>
                                <li>
                                    <a  :href="section.seeMoreRoute" class="button">
                                        Ver más
                                    </a>
                                </li>
                                
                            </ul>
                        </footer>
                    </section>
                </div>
            </div>
            <footer class="major" >
                <ul class="actions special" v-if=data.seeMoreRoute>
                    <li>
                        <router-link  :to="data.seeMoreRoute" class="button">
                            Ver más
                        </router-link>
                    </li>
                    
                </ul>
            </footer>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionFourth extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
