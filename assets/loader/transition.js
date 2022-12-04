const loader = document.querySelector('.loader');
const mains = document.querySelectorAll('.falatu');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    // main.style.display = 'block';
    // for(const main of mains) {
    //   main.style.display= 'block'
    // }
    setTimeout(() => {
      for (const main of mains) {
        main.style.opacity = 1
      }
    }, 50);
  }, 1000);
}

init();
