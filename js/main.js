function classToggle() {
  const navs = document.querySelectorAll(".navbar__items");

  navs.forEach((nav) => nav.classList.toggle("navbar__toggleShow"));
}

document
  .querySelector(".navbar__link-toggle")
  .addEventListener("click", classToggle);

/* */
/* ACCESS SUBMENU ITEMS WITH KEYBOARD */
var menuItems = document.querySelectorAll("li.has-submenu");
Array.prototype.forEach.call(menuItems, function (el, i) {
  el.querySelector("a").addEventListener("click", function (event) {
    if (this.parentNode.className == "has-submenu") {
      this.parentNode.className = "has-submenu open";
      this.setAttribute("aria-expanded", "true");
    } else {
      this.parentNode.className = "has-submenu";
      this.setAttribute("aria-expanded", "false");
    }
    event.preventDefault();
    return false;
  });
});

/* ALLOW HOVER MENU TO STAY ON PAGE FOR A SHORT TIME */
var menuItems = document.querySelectorAll("li.has-submenu");
Array.prototype.forEach.call(menuItems, function (el, i) {
  el.addEventListener("mouseover", function (event) {
    this.className = "has-submenu open";
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", function (event) {
    timer = setTimeout(function (event) {
      document.querySelector(".has-submenu.open").className = "has-submenu";
    }, 10);
  });
});
