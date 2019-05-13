console.log('It is me');
var selectElement = document.getElementById('selectElement')
selectElement.addEventListener('change', selectElementChange)

function selectElementChange() {
  // console.log(selectElement.value);
  document.body.style.backgroundColor = selectElement.value;
};