<template>
  <div class="d-flex gap-3 misuse-line">
    <div class="wrapper-default-block">
      <span class="data-name">Misuse</span>
      <div class="default-block misuse-block-wrap">
        <MisuseBlock
          v-for="(block, index) in misuseBlocks"
          :key="index"
          :img="block.img"
          :text="block.text"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import MisuseBlock from '../GridBlocks/Misuse/MisuseBlock.vue';
</script>
<script>
export default {
  data() {
    return {
      misuseBlocks: [
        {
          img: '/src/assets/misuse_1.png',
          text: 'Do not use old version of logo',
        },
        {
          img: '/src/assets/misuse_2.png',
          text: 'Do not distort or alter the proportions of the logo',
        },
        {
          img: '/src/assets/misuse_3.png',
          text: 'Do not use logo without the slogan',
        },
        {
          img: '/src/assets/misuse_4.png',
          text: 'Do not add contours to the logo',
        },
        {
          img: '/src/assets/misuse_5.png',
          text: 'Do not change any elements respective to one another',
        },
        {
          img: '/src/assets/misuse_6.png',
          text: 'Do not turn the logo to any angle',
        },
        {
          img: '/src/assets/misuse_7.png',
          text: 'Do not use one color black',
        },
      ],
    };
  },
};
</script>
