var cells = document.querySelectorAll(' div');

// function handleDragStart(e) {
//   // console.log('asdfasdf');
//   this.style.opacity = '0.4';  // this / e.target is the source node.
// }

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}
function handleDrop(e) {
  // this / e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(cells, function (cell) {
    cell.classList.remove('over');
  });
}



[].forEach.call(cells, function(cell) {
  cell.addEventListener('dragstart', handleDragStart, false);
  cell.addEventListener('dragenter', handleDragEnter, false);
  cell.addEventListener('dragover', handleDragOver, false);
  cell.addEventListener('dragleave', handleDragLeave, false);
  cell.addEventListener('drop', handleDrop, false);
    cell.addEventListener('dragend', handleDragEnd, false);
});
console.log(cells);
