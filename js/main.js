!(function () {
  const blocks = document.querySelectorAll(".fade-up-wrapper > *, .animated");
  [].forEach.call(blocks, ($item) => {
    function onScroll() {
      let delta = $item.getBoundingClientRect().top - window.innerHeight <= ($item.offsetHeight * -1) / 4 && !$item.classList.contains("in-view");
      if (delta) {
        setTimeout(() => {
          $item.classList.remove("in-view-detect");
          $item.classList.add("in-view");
        }, 200);
      }
    }
    onScroll();
    window.addEventListener("scroll", (e) => {
      onScroll();
    });
  });
})();

document.querySelector(".navbar-toggler").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    const body = document.body;
    const scrollY = body.style.top;
    body.removeAttribute("style");
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    this.classList.remove("active");
    document.querySelector(".navigation-main").classList.remove("active");
  } else {
    const scrollY = window.scrollY;
    document.querySelector("body").style.position = "fixed";
    document.querySelector("body").style.top = -scrollY + "px";
    this.classList.add("active");
    document.querySelector(".navigation-main").classList.add("active");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("not-top");
  } else {
    document.querySelector(".header").classList.remove("not-top");
  }
});
