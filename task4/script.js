const link = document.querySelector('a');

link.addEventListener('click',
    function (even) {
        even.preventDefault();
        link.textContent = prompt("Введите текст!")
    });