<template>
  <header class="custom-header">
    <div class="header-text" @click="changeId">Mapa socioeconómico de El Salvador</div>
    <img src="../../assets/images/logo/PNUD_logo.png" @click="changeId" alt="Header Image" class="header-image" />
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CustomHeader',
  methods: {
    ...mapMutations('app', ['setId']),
    changeId(){
      this.setId('esv')

      const targetElement = document.getElementById('mun-image');
      //Verificar que el elemento existe antes de intentar desplazar la pantalla
      if (targetElement) {
          // Desplazar la pantalla al elemento
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Enfocar el elemento, si es necesario
          targetElement.focus();
      }
    }
  }
};
</script>
