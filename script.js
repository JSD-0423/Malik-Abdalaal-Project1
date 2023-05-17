function setRating(rating) {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach((star, index) => {
      if (index < Math.floor(rating)) {
        star.innerHTML = '&#9733;';
      } else if (index === Math.floor(rating) && rating % 1 !== 0) {
        star.innerHTML = '&#9733;';
        star.style = `clip-path: polygon(0 0, ${Math.floor((rating % 1) * 100)}% 0, ${Math.floor((rating % 1) * 100)}% 100%, 0 100%)`;
      } else {
        star.innerHTML = '&#9734;';
      }
    });
  }
  
  // Example usage
  const rating = 3.4; // Replace with your specific rating value
  setRating(rating);
  