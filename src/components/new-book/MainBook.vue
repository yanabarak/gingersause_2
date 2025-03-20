<template>
  <div class="d-md-flex flex-column flex-grow-1 ms-auto" id="main-book" ref="mainBook">
    <ZeroLine class="d-flex d-xl-none masonry-item" />
    <FirstLine v-if="!isMobile" />
    <template v-else>
      <FirstLine
        v-for="(block, index) in blocksFirstLine"
        :key="`${index}-FirstLine`"
        :block-index="index"
        class="masonry-item"
      />
    </template>

    <ColorLine class="masonry-item" />
    <ThirdLine v-if="!isMobile" />
    <template v-else>
      <ThirdLine
        v-for="(block, index) in blocks"
        :key="`${index}-ThirdLine`"
        :block-index="index"
        class="masonry-item"
      />
    </template>
    <IconsLine class="masonry-item" />
    <SimpleLine v-if="!isMobile" />
    <template v-else>
      <SimpleLine
        v-for="(block, index) in blocksSimpleLine"
        :key="`${index}-SimpleLine`"
        :block-index="index"
        class="masonry-item"
      />
    </template>
    <SimpleLine2 v-if="!isMobile" />
    <template v-else>
      <SimpleLine2
        v-for="(block, index) in blocksSimpleLine2"
        :key="`${index}-SimpleLine2`"
        :block-index="index"
        class="masonry-item"
      />
    </template>
    <LogoSizes class="masonry-item" />
    <MisuseLine class="masonry-item" />
    <VisionMisionLine class="masonry-item" />
    <CoreValuesLine class="masonry-item" />
    <BrandArchetype class="masonry-item" />

    <BrandDesigner class="masonry-item d-flex d-xl-none w-100" />
    <DownloadModal />
    <DownloadModalFavicon />
  </div>
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import FirstLine from '../Chapters/FirstLine.vue';
import ColorLine from '../Chapters/ColorLine.vue';
import ThirdLine from '../Chapters/ThirdLine.vue';
import IconsLine from '../Chapters/IconsLine.vue';
import DownloadModal from '../Modal/DownloadModal.vue';
import DownloadModalFavicon from '../Modal/DownloadModalFavicon.vue';
import SimpleLine from '../Chapters/SimpleLine.vue';
import SimpleLine2 from '../Chapters/SimpleLine2.vue';
import LogoSizes from '../Chapters/LogoSizes.vue';
import MisuseLine from '../Chapters/MisuseLine.vue';
import VisionMisionLine from '../Chapters/VisionMisionLine.vue';
import CoreValuesLine from '../Chapters/CoreValuesLine.vue';
import BrandArchetype from '../Chapters/BrandArchetype.vue';
import ZeroLine from '../Chapters/ZeroLine.vue';
import BrandDesigner from '../new-book/sidebar/BrandDesigner.vue';
</script>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      blocks: [0, 1, 2, 3],
      blocksSimpleLine: [0, 1, 2],
      blocksSimpleLine2: [0, 1, 2, 3],
      blocksFirstLine: [0, 1, 2],
      colorsLineRows: 1,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateGridRows();
      }, 50);
      window.addEventListener('resize', this.updateGridRows);
      window.addEventListener('resize', this.handleResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('resize', this.updateGridRows);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    addFullWidthAfterSum(n) {
      const items = document.querySelectorAll('#main-book > .masonry-item');
      let rowSum = 0;
      let startIndex = -1;

      let number = 0;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const computedStyle = window.getComputedStyle(item);
        if (!item.classList.contains('colors-line') && !item.classList.contains('icons-line')) {
          const spanValue = parseInt(computedStyle.getPropertyValue('grid-row-end').split(' ')[1]);

          rowSum += spanValue;
        }
        if (rowSum >= n && startIndex === -1) {
          number = rowSum;
          startIndex = i + 1;
        }
      }

      if (startIndex !== -1 && startIndex < items.length) {
        for (let i = startIndex; i < items.length; i++) {
          items[i].classList.add('full-width-masonry');
        }

        if (document.querySelectorAll('#main-book > .icons-line').length) {
          document.querySelectorAll('#main-book > .icons-line')[0].style.gridRowStart = `${
            this.colorsLineRows ? this.colorsLineRows : 1
          }`;
          document.querySelectorAll('#main-book > .icons-line')[0].style.gridRowEnd = `${number}`;
        }
      }
    },
    updateGridRows() {
      const items = document.querySelectorAll('#main-book > .masonry-item');
      const rowHeight = 2;
      const rowGap = 0;

      items.forEach(item => {
        const itemHeight = item.getBoundingClientRect().height;

        const rowSpan = Math.ceil(itemHeight / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${rowSpan}`;
      });

      document.getElementById('main-book').style.display = 'grid';

      const getRowSpan = element => {
        if (!element) return 0;
        const computedStyle = getComputedStyle(element);
        const gridRowStart = parseInt(computedStyle.gridRowStart) || 1;
        const gridRowEndStr = computedStyle.gridRowEnd;
        let gridRowEnd;
        if (gridRowEndStr.startsWith('span')) {
          const spanValue = parseInt(gridRowEndStr.replace('span', '').trim());
          gridRowEnd = gridRowStart + spanValue;
        } else if (gridRowEndStr === 'auto' || !gridRowEndStr) {
          gridRowEnd = gridRowStart + 1;
        } else {
          gridRowEnd = parseInt(gridRowEndStr);
        }

        return gridRowEnd - gridRowStart;
      };

      const colorsLine = document.querySelector('.colors-line');
      const iconsLine = document.querySelector('.icons-line');

      const colorsLineRows = getRowSpan(colorsLine);
      this.colorsLineRows = getRowSpan(colorsLine);
      const iconsLineRows = getRowSpan(iconsLine);

      let totalRows;
      if (colorsLine && iconsLine) {
        totalRows = colorsLineRows + iconsLineRows;
      } else if (colorsLine) {
        totalRows = colorsLineRows;
      } else if (iconsLine) {
        totalRows = iconsLineRows;
      } else {
        totalRows = 0;
      }
      this.addFullWidthAfterSum(totalRows);
    },
  },
};
</script>
