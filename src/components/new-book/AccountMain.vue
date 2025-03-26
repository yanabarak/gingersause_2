<template>
  <div
    class="account-main align-content-start d-md-flex flex-grow-1 flex-wrap justify-content-start ms-auto"
    id="main-book"
  >
    <PreviewBlock
      src="/src/assets/logo-preview.svg"
      font-name="Poppins"
      :colors="[
        '#F05B5B',
        '#E9A4A4',
        '#856262',
        '#F0DC5B',
        '#B64C4C',
        '#C37F7F',
        '#B7A5A5',
        '#4F2C2C',
      ]"
      font-url="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    />
    <PreviewBlock
      src="/src/assets/logo-preview.svg"
      font-name="Poppins"
      font-url="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      :colors="['#131111', '#63177F', '#FFFFFF', '#C281DA']"
    />
    <PreviewBlock
      src="/src/assets/logo-preview.svg"
      font-name="Port Lligat Sans"
      font-url="https://fonts.googleapis.com/css2?family=Port+Lligat+Sans&display=swap"
      :colors="['#131111', '#63177F', '#FFFFFF', '#C281DA']"
    />
    <PreviewBlock
      src="/src/assets/logo-preview.svg"
      font-name="Port Lligat Sans"
      font-url="https://fonts.googleapis.com/css2?family=Port+Lligat+Sans&display=swap"
      :colors="['#131111', '#63177F', '#FFFFFF', '#C281DA']"
    />
  </div>
</template>

<script>
import PreviewBlock from './PreviewBlock.vue';

export default {
  components: {
    PreviewBlock,
  },
};
</script>
