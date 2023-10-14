  const images = document.querySelectorAll('.arrowdown');



      const paragraphs = document.querySelectorAll('.ecomdescription');
      const smmparagraphs = document.querySelectorAll('.stratdescription');
      
    
      let isSvgChanged = {}; 

      for (let i = 0; i < images.length; i++) {
       
        isSvgChanged[i] = false;
      
        images[i].addEventListener('click', function() {
          if (isSvgChanged[i]) {
            images[i].src = 'svgicon/arrowdown.svg';
            isSvgChanged[i] = false;
          } else {
            images[i].src = 'svgicon/x.svg';
            isSvgChanged[i] = true;
          }
        });
      }

      for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
          if (paragraphs[i] && paragraphs[i].style) {
            toggleDisplay(paragraphs[i]);
          }
          if (smmparagraphs[i] && smmparagraphs[i].style) {
            toggleDisplay(smmparagraphs[i]);
          }
        });
      }
      
      function toggleDisplay(element) {
        const style = element.style;
        if (style.display === '' || style.display === 'none') {
          style.display = 'flex';
        } else {
          style.display = 'none';
        }
      }

        
      // Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 



