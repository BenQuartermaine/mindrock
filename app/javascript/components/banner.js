import Typed from 'typed.js';

function loadDynamicBannerText() {
  console.log('typed')
  new Typed('#banner-typed-text', {
    strings: ["For Stronger Minds"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
