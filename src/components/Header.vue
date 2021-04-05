<template>
    <!-- Header -->
    <header id="header">
        <h1 id="logo"><a href="#banner">{{nav.title}}</a></h1>
        <nav id="nav">
            <ul v-if=nav.menu>
                <li v-for="(opcion, i) in nav.menu" :key=i>
                    <a :href="opcion.route" :class=opcion.class>
                        {{opcion.name}}
                    </a>
                    <ul v-if=opcion.submenu>
                        <li v-for="(item, k) in opcion.submenu" :key=k>
                           <a :href=item.route :class=item.class>
                               {{item.name}}
                           </a> 
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import NavMixin from '@/mixins/NavMixin'
import TestMixin from '@/mixins/TestMixin'

@Component
export default class Header extends Mixins(NavMixin, TestMixin) {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
