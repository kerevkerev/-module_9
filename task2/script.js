const _consoleLog = document.getElementById("consoleLog")
const _alert = document.getElementById("alert")
const _prompt = document.getElementById("prompt")



_consoleLog.addEventListener("click", () =>
    alert('Метод для вывода информации в веб-консоль'),

);
_alert.addEventListener("click", () =>
    alert('Метод предназначен для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»'),

);
_prompt.addEventListener("click", () =>
    alert('Метод предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»'),

);