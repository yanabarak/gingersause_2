<template>
  <div class="d-md-flex flex-column flex-grow-1 ms-auto" id="main-book" ref="mainBook">
    <ZeroLine class="d-flex d-xl-none masonry-item" />
    <FirstLine class="masonry-item" />
    <ColorLine class="masonry-item" />
    <ThirdLine class="masonry-item" />
    <IconsLine class="masonry-item" />
    <SimpleLine class="masonry-item" />
    <SimpleLine2 class="masonry-item" />
    <LogoSizes class="masonry-item" />
    <MisuseLine class="masonry-item" />
    <VisionMisionLine class="masonry-item" />
    <CoreValuesLine class="masonry-item" />
    <BrandArchetype class="masonry-item" />
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
</script>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateGridRows();
      }, 50);
      window.addEventListener('resize', this.updateGridRows);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateGridRows);
  },
  methods: {
    updateGridRows() {
      const items = document.querySelectorAll('#main-book > .masonry-item');
      const rowHeight = 5; // Висота одного рядка
      const rowGap = 10; // Проміжок між рядками, визначений у CSS (gap: 10px)

      items.forEach(item => {
        console.log(item);
        const itemHeight = item.getBoundingClientRect().height;
        // Враховуємо gap: кожен рядок фактично займає (rowHeight + rowGap) простору
        const rowSpan = Math.ceil(itemHeight / (rowHeight + rowGap) + 0.5); // +1 для компенсації округлення
        console.log(itemHeight, rowSpan);
        item.style.gridRowEnd = `span ${rowSpan}`;
      });

      document.getElementById('main-book').style.display = 'grid';

      const getRowSpan = element => {
        if (!element) return 0;
        const computedStyle = getComputedStyle(element);
        const gridRowStart = parseInt(computedStyle.gridRowStart) || 1; // Початковий рядок
        const gridRowEndStr = computedStyle.gridRowEnd; // Кінцевий рядок як рядок

        let gridRowEnd;
        if (gridRowEndStr.startsWith('span')) {
          // Якщо "span X", додаємо до початкового рядка
          const spanValue = parseInt(gridRowEndStr.replace('span', '').trim());
          gridRowEnd = gridRowStart + spanValue;
        } else if (gridRowEndStr === 'auto' || !gridRowEndStr) {
          // Якщо auto або не задано, вважаємо, що займає 1 рядок
          gridRowEnd = gridRowStart + 1;
        } else {
          // Якщо конкретне число
          gridRowEnd = parseInt(gridRowEndStr);
        }

        return gridRowEnd - gridRowStart; // Кількість рядків
      };

      // Отримуємо елементи
      const colorsLine = document.querySelector('.colors-line');
      const iconsLine = document.querySelector('.icons-line');

      // Підраховуємо рядки
      const colorsLineRows = getRowSpan(colorsLine);
      const iconsLineRows = getRowSpan(iconsLine);

      let totalRows;
      if (colorsLine && iconsLine) {
        // Якщо обидва елементи є, сумуємо їх рядки
        totalRows = colorsLineRows + iconsLineRows;
      } else if (colorsLine) {
        // Якщо є тільки .colors-line
        totalRows = colorsLineRows;
      } else if (iconsLine) {
        // Якщо є тільки .icons-line
        totalRows = iconsLineRows;
      } else {
        // Якщо обох немає
        totalRows = 0;
      }

      console.log(`Загальна кількість рядків для .colors-line + .icons-line: ${totalRows}`);
      return totalRows; // Повертаємо значення, якщо потрібно використовувати далі
    },
  },
};
</script>

<style scoped>
@media (max-width: 796px) {
  .colors-line,
  .icons-line {
    flex-direction: column;
    grid-column: 2 !important; /* Правый столбец для ColorLine и IconsLine */
  }
  .colors-line {
    grid-row-start: 1;
  }

  #main-book > .d-flex {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px !important;
    grid-column: 1; /* Левый столбец для остальных элементов */
  }
  #main-book {
    grid-template-columns: calc(70% - 5px) calc(30% - 5px);
    grid-auto-rows: 5px;
    gap: 10px !important;
    padding: 100px 0;
    max-width: 100%;
    overflow: hidden;
  }

  /* Элементы, які йдуть після точки розриву, займають повну ширину */
  .full-width {
    grid-column: 1 / -1; /* Займає обидва стовпчики */
  }
}
</style>
