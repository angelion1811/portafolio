<template>
  <div>
    <div id="page-wrapper">
      <Header/>
      <Banner :banner=bannerData />
      <SectionOne :data=firstData />
      <SectionTwo :data=secondData />
      <SectionThree :data=thirdData />
      <SectionFourth :data=fourthData />
      <SectionFifth  :data=fifthData />
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
        "Desarrollador Web Full-Stack",
        '"Hay dos formas de escribir programas sin errores;',
        'Solo La tercera funciona"',
        ' --Alan J. Perlis'
      ],
      picture:"../portafolio/landed/images/picture2.png"
    }

    private firstData = {
      title:"Hola!, soy Angel.",
      subtitle:"Voy a contarte un poco acerca de mí.",
      paragraphs:[
          "Comencé en esta profesión de manera oficial a partir del 2017 y trabajado en diferentes áreas que conlleva un desarrollo web. Mi primer empleo estuve como Backend Developer.",
          "En lo personal prefiero trabajar mas en el backend que en el front-end, sin embargo eso no implica que no pueda cumplir ese rol."
        ],
      picture:"../portafolio/landed/images/panel.png"
    }

    private secondData = {
      title:"Experiencias.",
      subtitle:"Roles",
      paragraphs:[
        "Como mencioné anteriormente he trabajado en diferentes roles en cuanto al desarrollo web",
        "Backend Developer: haciendo desarrollo de API's con php y node, sockets en nodejs.",
        "Front-end Developer: haciendo paginas usando los frameworks Angular o vuejs.",
        "Tester QA: haciendo pruebas de repuestas de las API's haciendo uso de cliente la herramienta Postman.",
      ],
      picture:"../portafolio/landed/images/socket.png"
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
          paragraph:"He aprendido a trabajar con los siguientes frameworks en los siguientes niveles:",
          items:[
            "Laravel: Intermedio",
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
      ],
      picture:"../portafolio/landed/images/angular.png"
    }

    private fourthData = {
      title:"Portafolio",
      subtitle:"Lo que he logrado hacer.",
      descriptions:[
        {
          personIcon:"fab fa-node",
          title:"API en Nodejs",
          description:"Una pequeña API para un test de Angular montada en Heroku usando como gesto de base de datos MySQL y como ORM sequelize.",
          link:[
            {
              description:"Ir pagina",
              route:"http://angel-nodeapi.herokuapp.com/"
            },
            {
              description:"Ver codigo",
              route:"https://github.com/angelion1811/nodeapi"
            },
          ]
        },
         {
          personIcon:"fab fa-laravel",
          title:"API en Laravel",
          description:"Una pequeña API en Laravel usando como gesto de base de datos MySQL y como ORM Entity de Laravel no esta en Heroku sin embargo esta en mi repositorio de GitHub.",
          link:[
            {
              description:"Ver codigo",
              route:"https://github.com/angelion1811/laravel_basic_api"
            },
          ]
        },
         {
          personIcon:"fab fa-angular",
          title:"Crud en Angular",
          description:"Este en un pequeño Crud que hice como practica para conocer las bases de Angular y Esta montado en mis GitHub Pages, este consume la api que realice en Nodejs.",
          link:[
            {
              description:"Ir pagina",
              route:"https://angelion1811.github.io/crudangular/"
            },
            {
              description:"Ver codigo",
              route:"https://github.com/angelion1811/crudangular"
            },
          ]
        },
        {
          personIcon:"fab fa-vuejs",
          title:"Portafolio",
          description:"Este Portafolio fue realizado en Vuejs como practica para conocer la forma usando typescript. Y bueno como saben esta montado en mis GitHub pages por ende esta en mis repositorios.",
          link:[
            {
              description:"Ver codigo",
              route:"https://github.com/angelion1811/portafolio"
            }
          ]
        },
        {
          personIcon:"fab fa-node-js",
          title:"Sockets",
          description:"Un pequeño socket de prueba realizado en Nodejs para mostrar la reactividad y respuesta en tiempo real, este socket cumple la función de chat mas no almacena en alguna base de datos.",
          link:
          [
            {
              description:"Ir pagina",
              route:"http://angel-chatio.herokuapp.com/"
            }
          ]
        },
        {
          personIcon:"fab fa-html5",
          title:"Extensiones de Chrome",
          description:"He realizado un par de extensiones en Chrome con fines le lucro para sus usuarios por lo cual su función se omiten."
        },
      ],
    }

    private fifthData = {
      title:"Contáctame",
      subtitle:"Si estás interesado en comunicarte conmigo envíame un mensaje por Whatsapp a través del formulario o contáctame a través de mis redes sociales.",
    }
  }
</script>
