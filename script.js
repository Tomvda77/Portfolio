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

const links = document.querySelectorAll('a');

links.forEach((link) => link.addEventListener('click', changeImage));
