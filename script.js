// const header = document.querySelector(".header__heading");
const container = document.querySelector(".container");

const docsUrl =
  "https://docs.google.com/spreadsheets/d/17JD40CfCYiZX8gbiNDRDfYBtsNhWpyhGaZ8HyCYCycE/edit?usp=sharing";

// https://docs.google.com/spreadsheets/d/e/2PACX-1vTIw2D2vM1ZuJDUeDu8zNf8oumNdQKpRJvAaRBR8bRfJ_hJLYdHmEWZUi-D3YkUeEfmT1RqKaRgP-0s/pubhtml

function init() {
  Tabletop.init({
    key: docsUrl,
    callback: showInfo,
    simpleSheet: true
  });
}

function showInfo(data, tabletop) {
  console.log(data);
  container.innerHTML = `
    <header class="header">
    <h1 class="heading-primary header__heading">
      ${data[0].header}
    </h1>
    <button class="btn header__btn">${data[0].header__btn}</button>
  </header>
  <section class="about">
    <h1 class="heading-secondary">${data[0].about}</h1>
    <p class="paragraph-primary">
      ${data[0].about__me}
    </p>
    <button class="btn about__btn">${data[0].about__btn}</button>
  </section>
  <section class="boxes">
    <div class="boxes__heading">
      <h2 class="heading-secondary">${data[0].boxes}</h2>
    </div>
    <div class="box">
      <div class="box__content box__content--1">
        ${data[0].box__1}
      </div>
      <div class="box__content box__content--2">
      ${data[0].box__2}
      </div>
      <div class="box__content box__content--3">
      ${data[0].box__3}
      </div>
    </div>
  </section>
  <section class="contact">
    <div class="contact__heading">
      <h2 class="heading-secondary">Contact Us</h2>
    </div>
    <form class="form">
      <input
        type="text"
        placeholder="Enter Your Username"
        class="form__input form__input--username"
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        class="form__input form__input--email"
      />
      <button type="submit" class="btn form__submit">
        Submit
      </button>
    </form>
  </section>
  <footer class="footer">
      <h2 class="heading-secondary">
          ${data[0].footer}
      </h2>
  </footer>
    `;
}

window.addEventListener("DOMContentLoaded", init);
