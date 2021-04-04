<template>
  <div>
    <div id="page-wrapper">
      <Header/>
      <Banner :banner=bannerData />
      <SectionOne :data=firstData v-scrollanimation />
      <SectionTwo :data=secondData v-scrollanimation />
      <SectionThree :data=thirdData v-scrollanimation />
      <SectionFourth :data=fourthData v-scrollanimation />
      <SectionFifth  :data=fifthData v-scrollanimation />
      <Footer/>
    </div>
  </div>
  
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import Header from '@/components/Header.vue'; // @ is an alias to /src
  import Banner from '@/components/Banner.vue'; // @ is an alias to /src
  import SectionOne from '@/components/SectionOne.vue'; // @ is an alias to /src
  import SectionTwo from '@/components/SectionTwo.vue'; // @ is an alias to /src
  import SectionThree from '@/components/SectionThree.vue'; // @ is an alias to /src
  import SectionFourth from '@/components/SectionFourth.vue'; // @ is an alias to /src
  import SectionFifth from '@/components/SectionFifth.vue'; // @ is an alias to /src
  import Footer from '@/components/Footer.vue'; // @ is an alias to /src


  @Component({
    components: {
      HelloWorld,
      Header,
      Banner,
      SectionOne,
      SectionTwo,
      SectionThree,
      SectionFourth,
      SectionFifth,
      Footer,
    },
  })

  export default class Home extends Vue {
    private bannerData = {
      title:"Angel León",
      descriptions:[
        "FullStack Web Developer",
        '"Hay dos formas de escribir programas sin errores;',
        'Solo La tercera funciona"',
        ' --Alan J. Perlis'
      ],
      picture:""
    }

    private firstData = {
      title:"Hola!, soy Angel.",
      subtitle:"FullStack Web Developer",
      paragraphs:[
          "Comencé en esta profesión de manera oficial a partir del 2017 y trabajado en diferentes aréas que conlleva un desarrollo web. Mi primer empleo estuve como Backend Developer.",
          "En lo personal prefiero trabajar mas en el backend que en el front-end, sin embargo eso no implica que no pueda cumplir ese rol."
        ]
    }

    private secondData = {
      title:"Experiencias.",
      subtitle:"Roless",
      paragraphs:[
          "Como mencioné anteriormente he trabajado en diferentes roles en cuanto al desarrollo web",
          "Backend Developer",
          "Front-end Developer",
          "Tester QA",
        ]
    }

    private thirdData = {
      title:"Habilidades",
      subtitle:"Que logrado aprender y dominar",
      descriptions:[
        {
          paragraph:"Durante este tiempo en trabajado con los siguientes lenguajes",
          items:[
            "PHP",
            "Javascript - Nodejs",
          ]
        },
        {
          paragraph:"He aprendido a trabajar con los siguientes frameworks:",
          items:[
            "Laravel: intermedio",
            "Vuejs: Basico",
            "Angular: Basico",
          ]
        },
        {
          paragraph:"He trabajado con los gestores de versiones:",
          items:[
            "GitHub",
            "Bitbucket",
          ]
        }
      ]   
    }

    private fourthData = {
      title:"Mis Proyectos",
      subtitle:"Aqui una",
      descriptions:[
        {
          icon:"fa-chart-area",
          title:"API en Nodejs",
          description:"una pequeña API para un test de Angular montada en Heroku usando como gesto de base de datos MySQL y como ORM sequelize"
        },
         {
          icon:"fa-chart-area",
          title:"API en Laravel",
          description:"una pequeña API en Laravel usando como gesto de base de datos MySQL y como ORM Entity de Laravel no esta en Heroku"
        },
      ]
    }

    private fifthData = {
      title:"Mis Proyectos",
      subtitle:"Aqui una",
      descriptions:[
        {
          icon:"fa-chart-area",
          title:"API en Nodejs",
          description:"una pequeña API para un test de Angular montada en Heroku usando como gesto de base de datos MySQL y como ORM sequelize"
        },
         {
          icon:"fa-chart-area",
          title:"API en Laravel",
          description:"una pequeña API en Laravel usando como gesto de base de datos MySQL y como ORM Entity de Laravel no esta en Heroku"
        },
      ]
    }

  }
</script>