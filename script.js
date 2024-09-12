function changeImage(eventObject) {
  eventObject.preventDefault(); //prevent click ink -> goto top of page
  const selectedCard = this.parentElement.parentElement; //get card of selected link
  const Image = selectedCard.querySelector('img'); //get img of card
  const oldSrc = Image.src; //put img attr in memory
  const oldAlt = Image.alt;
  Image.src = './images/underconstruction.jpg'; //change image
  Image.alt = 'Under Construction';
  setTimeout(() => {
    // wait 1.5 seconds
    Image.src = oldSrc; //go back to previous image
    Image.alt = oldAlt;
  }, 2500);
}

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = this.document.querySelector('.header-container');
  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

const links = document.querySelectorAll('.cards a');

links.forEach((link) => link.addEventListener('click', changeImage));
