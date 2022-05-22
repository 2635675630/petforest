<template>
  <div class="mainbox">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .mainbox{
        width: 96%;
        height: 96%;
        position: relative;
        top: 2%;
        left: 2%;
        box-shadow: 0 0 3px 3px rgba(0,0,0,0.3);
        border-radius: 10px;
    
    }
</style>