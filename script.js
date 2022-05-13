AOS.init({
  offset: 240,
});
document.addEventListener('aos:in', ( {detail} ) => {
  detail.style.animation="";
  for (ele of detail.querySelectorAll(".boxes div")) {
    ele.classList.toggle("animate");
    ele.style.animation="";
  }
});
document.addEventListener('aos:out', ( {detail} ) => {
  for (ele of detail.querySelectorAll(".boxes div")) {
    ele.classList.toggle("animate");
  }
});
