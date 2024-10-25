<template>
    <div :class="['seta-baixo', { hidden: isHidden }]">
      <v-icon color="yellow">mdi-chevron-triple-down</v-icon>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const isHidden = ref(false);
  
      const handleScroll = () => {
        isHidden.value = window.scrollY > 100; // Esconde a seta após 100px de rolagem
      };
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });
  
      return { isHidden };
    }
  };
  </script>
  
  <style scoped>
  .seta-baixo {
    font-size: 2rem;                
    color: white;                   
    text-align: center;             
    cursor: pointer;                
    position: fixed;                
    bottom: 20px;                   
    left: 50%;                      
    transform: translateX(-50%);    
    animation: pulando 1s infinite; 
    transition: opacity 0.5s ease;  
    z-index: 10;
  }
  
  @keyframes pulando {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px); 
    }
    100% {
      transform: translate(-50%, 0); 
    }
  }
  
  .hidden {
    opacity: 0; 
    pointer-events: none; 
  }
  </style>
  