<template>
    <!-- Footer -->
    <footer id="footer">
        <ul class="icons">
            <li v-for="(item, i) in data.descriptions" :key=i>
                <a :href="item.route" :class="item.icon">
                    <span class="label">{{item.paragraph}}</span>
                </a>
            </li>
        </ul>
        <ul class="copyright">
            <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    private data = {
      descriptions:[
        {
          icon:"icon brands alt fa fa-whatsapp",
          route:"https://wa.me/584124614009",
          paragraph:"Whatsapp"
        },
        {
          icon:"icon brands alt fa fa-facebook-f",
          route:"https://www.facebook.com/angel.leon1",
          paragraph:"Facebook"
        },
        /*
        {
          icon:"",
          route:"#",
          paragraph:"Twitter"
        },
        */
        {
          icon:"icon brands alt fa-instagram",
          route:"https://www.instagram.com/angel.leon1/",
          paragraph:"Instagram"
        },
        {
          icon:"icon brands alt fa-github",
          route:"https://github.com/angelion1811",
          paragraph:"GitHub"
        },
        {
          icon:"icon brands alt fa-linkedin-in",
          route:"linkedin.com/in/angel-leon-164004175",
          paragraph:"LinkedIn"
        },
        {
          icon:"icon solid alt fa fa-envelope",
          route:"mailto:angelleon.ef@gmail.com",
          paragraph:"Email"
        },
      ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
