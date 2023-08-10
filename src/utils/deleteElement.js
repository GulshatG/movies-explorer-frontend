function deleteHeader() {
  const header = document.querySelector('.header');
  if (header) header.remove();
}

function deleteFooter() {
  const footer = document.querySelector('.footer');
  if (footer) footer.remove();
}
export {deleteHeader,deleteFooter};
