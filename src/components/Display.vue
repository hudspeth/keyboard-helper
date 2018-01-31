<template>
  <div class="big-screen">
  </div>
</template>

<script>
export default {
  data: {

  },
  methods: {
    
  }
}
</script>

<style scoped>
.big-screen {
  position: absolute;
  left: 50%;
  top: 20%;
  transition: all 1s ease;
  color: white;
  font-size: 50px;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}

.big-text {
  transform: scale(2.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
</style>
