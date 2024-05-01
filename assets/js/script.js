'use strict';



// 找到博客标签
const blogTags = document.querySelector(".blog");
// 加载HTML页面，挂载上去
const XML = new XMLHttpRequest();
XML.open("GET", "/blog.html", true);
XML.send();
XML.onreadystatechange = function () {
  blogTags.innerHTML = XML.responseText;
}

// 找到portfolio标签
const portfolioTags = document.querySelector(".portfolio");
// 加载HTML页面，挂载上去
const XML2 = new XMLHttpRequest();
XML2.open("GET", "/portfolio.html", true);
XML2.send();
XML2.onreadystatechange = function () {
  portfolioTags.innerHTML = XML2.responseText;
}

// 
const contactTags = document.querySelector(".contact");
// 加载HTML页面，挂载上去
const XML3 = new XMLHttpRequest();
XML3.open("GET", "/contact.html", true);
XML3.send();
XML3.onreadystatechange = function () {
  contactTags.innerHTML = XML3.responseText;
}

// 简历
const resumeTags = document.querySelector(".resume");
// 加载HTML页面，挂载上去
const XML4 = new XMLHttpRequest();
XML4.open("GET", "/resume.html", true);
XML4.send();
XML4.onreadystatechange = function () {
  resumeTags.innerHTML = XML4.responseText;
}

// 关于
const aboutTags = document.querySelector(".about");
// 加载HTML页面，挂载上去
const XML5 = new XMLHttpRequest();
XML5.open("GET", "/about.html", true);
XML5.send();
XML5.onreadystatechange = function () {
  aboutTags.innerHTML = XML5.responseText;
}








// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
window.onload = function () {
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  window.onload = function () {
    select.addEventListener("click", function () { elementToggleFunc(this); });
  }

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }

  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");
  console.log(filterItems);

  const filterFunc = function (selectedValue) {
    console.log(selectedValue);

    for (let i = 0; i < filterItems.length; i++) {

      if (selectedValue === "所有") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }

    }

  }

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }



  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }

  // add event to form button
  formBtn.addEventListener("click", function () {
    // 将内容发送到邮箱

    form.reset();
    formBtn.setAttribute("disabled", "");
  });


  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }

    });
  }
}
