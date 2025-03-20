export default function updateCSSVariablesSaveBtn(
  mainColorBook,
  mainFont,
  secFont,
  mainFontWeight,
  secFontWeight
) {
  document.body.style.setProperty('--main-color-book', mainColorBook);
  document.body.style.setProperty('--mainFont', mainFont);
  document.body.style.setProperty('--secFont', secFont);
  document.body.style.setProperty('--mainFontWeight', mainFontWeight);
  document.body.style.setProperty('--secFontWeight', secFontWeight);
}
