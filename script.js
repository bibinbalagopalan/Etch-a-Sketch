function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid
    
    const squareSize = 960 / size; // Calculate size of each square based on the grid size
    
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.addEventListener('mouseenter', changeColor);
      container.appendChild(div);
    }
  }
  
  function changeColor(e) {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const currentColor = e.target.style.backgroundColor;
    
    if (currentColor) {
      e.target.style.filter = `brightness(${Math.max(0, getBrightness(currentColor) - 0.1)})`;
    } else {
      e.target.style.backgroundColor = randomColor;
      e.target.style.filter = `brightness(1)`;
    }
  }
  
  function getBrightness(color) {
    const rgb = color.match(/\d+/g);
    return rgb ? (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / (3 * 255) : 1;
  }
  
  document.getElementById('change-grid').addEventListener('click', () => {
    let size = parseInt(prompt('Enter new grid size (max 100):'));
    if (size > 100) size = 100;
    createGrid(size);
  });
  