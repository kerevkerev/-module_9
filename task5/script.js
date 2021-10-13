const input = document.querySelector('input')
const button = document.querySelector('button')
const text = document.querySelector('#duplicateField')


input.addEventListener('input', function (event) {
    text.textContent = input.value
})
button.addEventListener('click', function () {
    text.textContent = "";
    console.log(input.value);
    input.value = "";
})