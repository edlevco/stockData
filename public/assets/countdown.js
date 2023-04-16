

const colorBtn = document.getElementById('colorBtn')

colorBtn.addEventListener('click', changeColor)


function changeColor() {

 // Get all elements with class "percent"
const percentElements = document.querySelectorAll('.percent');

// Convert the NodeList to an array
const percentArray = Array.from(percentElements);

// Loop through the array and check the innerHTML value of each element
percentArray.forEach(element => {
  // Convert the innerHTML string to a number
  const value = parseFloat(element.innerHTML);

  // Check if the value is over or under 0
  if (value > 0) {
    element.style.color = 'green';
  } else {
    element.style.color = 'red';
  }
});
}