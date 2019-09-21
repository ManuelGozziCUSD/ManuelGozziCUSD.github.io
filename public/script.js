const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const navBar = document.querySelector('nav');
    
    portfolioItems.forEach(portfolioItem => {
      portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');   
        portfolioItem.childNodes[1].classList.remove('img-lighten');

      });
      
      portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.add('img-lighten');
        portfolioItem.childNodes[1].classList.remove('img-darken');
      });
  });

  window.addEventListener('scroll', function(e) {
    const scroll_pos = window.scrollY;
    
    if(scroll_pos > 50) {
       navBar.classList.add('past-top');
    } else {
      navBar.classList.remove('past-top');
    }
  });

//highlight current link on site
function highlightCurrentLink() {
  const effectiveURL = document.URL.substring(document.URL.indexOf('.me/') + 4);
  const mainElement = document.querySelector('a[href="#"]');
  let elem = document.querySelector('a[href*="' + effectiveURL + '"]');

//if url is not pointing to home
  if(effectiveURL !== '' && !effectiveURL.includes('index')){
    if(elem != null ) {
      elem.classList.add('current-link');
      mainElement.classList.remove('current-link');
    } else {
      mainElement.classList.add('current-link');    
    } //otherwise set home page to highlighted
  } else {
    mainElement.classList.add('current-link');
  }
}

document.addEventListener('readystatechanged', highlightCurrentLink());
window.hashchange = highlightCurrentLink();