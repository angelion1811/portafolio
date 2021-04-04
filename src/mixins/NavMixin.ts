import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavMixin extends Vue {
	public nav = {
		title: "Angel León",
		menu:[
			{
				name: "Acerca de mí",
				route: "#about",
				class: "scrolly"
			},
			{
				name:"Experiencias",
				route: "#experience",
				class: "scrolly"
			},
			{
				name: "Habilidades",
				route: "#skills",
				class: "scrolly"
			},
			{
				name: "Portafolio",
				route: "#portafolio",
				class: "scrolly"
			},
			{
				name: "Contacto",
				route: "#contact",
				class: "scrolly"
			},
		]
	}
}
