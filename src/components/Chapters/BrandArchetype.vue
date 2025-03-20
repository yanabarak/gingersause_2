<template>
  <div
    class="wrapper-default-block d-flex align-items-center justify-content-center flex-grow-1 magnif-glass brand-archetype-line"
    data-toggle="modal"
    data-target="#downloadModal"
  >
    <span class="data-name">Brand Archetype</span>
    <div class="default-block core-values-block-wrap w-100">
      <h3 class="fw-boldest fs-32">Brand Archetype</h3>
      <div class="archetype-wrapper justify-content-center">
        <BrandArchetype
          img="themagician"
          title="The Magician"
          text="It is a smart and intelligent archetype, aiming to make all the wishes come true. The Magician brands oftentimes convert their groundbreaking knowledge into innovative technology. Audiences of this type need to be provided with a solution to their problem, or to be in on the secret information."
          sample="Think of Nikola Tesla, Disney or Apple."
        />
        <BrandArchetype
          img="thecreator"
          title="The Creator"
          text="The Creator are nonconformists, driven by a desire for the self-expression. They have their own vision, and try to create something truly unique. With their project, they aim at uncovering the true potential and creativity of their audience."
          sample="Think of Pharrell Williams, Adobe or Lego."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import BrandArchetype from '../GridBlocks/BrandArchetype/BrandArchetype.vue';
</script>
