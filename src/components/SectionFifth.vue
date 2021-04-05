<template>
    <!-- Five -->
    <section id="contact" class="wrapper style2 special fade">
        <div class="container">
            <header>
                <h2>{{data.title}}</h2>
                <p>{{data.subtitle}}</p>
            </header>
            <form >
                <div class="row gtr-uniform gtr-100">
                    <div class="col-12">
                        <textarea v-model=message name="message" id="message" placeholder="Escribe tu mensaje de whatsapp por aqui" rows="6"></textarea>
                    </div>
                    <div class="col-12">
                        <ul class="actions">
                            <li><input type="button" @click=sendMessage() value="Enviar mensaje" class="primary"></li>
                            <li><input type="reset" value="Limpiar formulario"></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionFifth extends Vue {
  @Prop() private data: any;
  
  private message = "";

  private phoneNumber = "584124614009";

  private sendMessage(): void {
    let url = "https://api.whatsapp.com/send?phone="+this.phoneNumber+"&text="+encodeURI(this.message);
    window.open(url);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
