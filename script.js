"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button");
  let wrapper = document.querySelector(".wrapper");

  async function getWeather() {
    let city = document.querySelector("#search").value;
    const container = await fetch(
      `http://api.weatherstack.com/current?access_key=43fb30f05461908977b09395b7927737&query=${city}`
    );
    const data = await container.json();
    const block = document.createElement("div");
    const close = document.createElement("i");
    block.className = "box";
    close.className = "del";
    block.innerHTML = `<p>${data.request.query} <br> ${data.current.temperature} градусов </p>`;
    wrapper.prepend(block);
    block.prepend(close);
    close.addEventListener("click", deleteCard);
    // let close = document.querySelector('.close');
    // wrapper.insertAdjacentHTML('afterbegin', `<div>${data.request.query} <br> ${data.current.temperature} градусов <i class="close"></i>  </div>`);
  }

  function deleteCard(event) {
    let target = event.target;
    let parent = target.parentElement;
    console.log(parent);
    parent.remove();
  }

  // close.addEventListener('click', (e) => {
  //   if(e.target === close)  {

  //   }
  // });
  btn.addEventListener("click", getWeather);

  // .then(response => response.json())
  // .then(response => {
  //   output.innerHTML = `${response.request} <br> ${response.current}`;
  // });

  //   При повторном нажатии на кнопку , добавлялась другая информация ниже
});
