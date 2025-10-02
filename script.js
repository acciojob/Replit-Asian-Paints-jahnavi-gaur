window.onload = function () {
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');

  changeButton.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'transparent';
    }

    // Apply new color if block exists
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
};
