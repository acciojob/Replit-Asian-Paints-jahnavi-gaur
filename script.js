//your JS code here. If required.
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

changeButton.addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  // Reset all grid items
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = 'transparent';
  }

  // Change color of the selected block if it exists
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

resetButton.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = 'transparent';
  }
});
