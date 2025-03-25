<template>
  <div class="d-flex gap-3">
    <TextBlock
      v-for="(info, index) in textElements"
      :key="info.title"
      :info="info"
      :dataName="info.dataName"
    />
  </div>
</template>

<script>
import TextBlock from '../GridBlocks/TextBlock.vue';

export default {
  name: 'YourComponentName', // Replace with your actual component name
  components: {
    TextBlock,
  },
  data() {
    return {
      textElements: [
        {
          title: 'Vision',
          text: `A vision statement describes where the company aspires to be upon achieving its mission. This statement reveals the "where" of a business -- but not just where the company seeks to be.`,
          dataName: 'Vision',
        },
        {
          title: 'Mission',
          text: `A mission statement is, in some ways, an action-oriented vision statement, declaring the purpose an organization serves to its audience. That often includes a general description of the organization, its function, and its objectives. Ultimately, a mission statement is intended to clarify the "what," the "who," and the "why" of a company. It's the roadmap for the company's vision statement.`,
          dataName: 'Mission',
        },
      ],
    };
  },
};
</script>
