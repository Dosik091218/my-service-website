document.getElementById('service-form').addEventListener('submit', function (event) {
    event.preventDefault(); // отменяем стандартную отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const serviceType = document.getElementById('service-type').value;
    const details = document.getElementById('details').value;
    const preferredDate = document.getElementById('preferred-date').value;

    // Тут можно отправить данные на сервер, но для демонстрации просто показываем сообщение
    alert(`Заявка от ${name} успешно отправлена!\nТип услуги: ${serviceType}\nДата: ${preferredDate}`);

    // Очистка формы
    document.getElementById('service-form').reset();
});
