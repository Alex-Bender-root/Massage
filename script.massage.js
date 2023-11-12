
// шапка
$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_burger,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});















$(document).ready(function () {
  // Отображение изображения(сертификатов) в модальном окне
  $('.con_lv img').click(function () {
    let src = $(this).attr('src');
    $('#modal-img').attr('src', src);
    $('.modal').addClass('show');
  });

  // Закрытие модального окна при нажатии на "Esc" и клике вне окна
  function closeModal() {
    $('.modal').removeClass('show');
  }

  $(document).keydown(function (e) {
    if (e.keyCode === 27) { // Код клавиши "Esc"
      closeModal();
    }
  });

  $(document).mouseup(function (e) {
    if (!$('.modal-content').is(e.target) && $('.modal').has(e.target).length === 0) {
      closeModal();
    }
  });

  // Закрытие модального окна при клике на кнопку "Закрыть"
  $('.close').click(function () {
    closeModal();
  });
});









// форма остались вопросы
function dispatch_wh() {
  // Получаем значения полей формы
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const comment = document.getElementById('comment');

  // Формируем сообщение для WhatsApp
  const dis_wh = `${name.value}\n${phone.value}\nВопрос: ${comment.value}`;

  // Ссылка для отправки на WhatsApp
  const whatsappLink = `https://wa.me/+79271211063/?text=${encodeURIComponent(dis_wh)}`;

  // Перенаправляем пользователя на WhatsApp
  window.location.href = whatsappLink;

  name.value = '';
  phone.value = '';
  comment.value = '';
}




















// if (window.location.href.includes('certificates.php')) {

// модальное всплывающее окно, формы отправки вопроса пользователя
document.getElementById("open-modal-win").addEventListener("click", function () {
  document.getElementById("form-input-modal").classList.add("open")
})
// закрыть модальное окно
document.getElementById("close-form-input-modal").addEventListener("click", function () {
  document.getElementById("form-input-modal").classList.remove("open")
})
// закрыть модальное окно esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("form-input-modal").classList.remove("open")
  }
});
// закрыть модальное окно при клике вне его
document.querySelector("#form-input-modal .form_input_box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("form-input-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// Получаем кнопку "Получить консультацию" в модальном окне
const sendWhatsAppButton = document.getElementById("sendWhatsAppButton");

// Обработчик события для клика на кнопке "Получить консультацию"
sendWhatsAppButton.addEventListener("click", function () {
  // Получаем значения полей формы в модальном окне
  const name = encodeURIComponent(document.getElementById('name').value);
  const phone = encodeURIComponent(document.getElementById('phone').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const comment = encodeURIComponent(document.getElementById('comment').value);

  // Формируем сообщение для WhatsApp
  const message = `${name}%0A${phone}%0A${email}%0AКомментарий: ${comment}`;

  // Ссылка для отправки на WhatsApp
  const whatsappLink = `https://wa.me/+79271211063/?text=${message}`;

  // Открываем ссылку в новой вкладке
  window.open(whatsappLink);
});

// }















// // Получите токен бота и ID чата
// const botToken = '6398838927:AAEklFXotRaATAyH9uSkf9erGl5WHGU_3nQ';
// const chatId = '-1002052344345';

// // Функция для отправки сообщения в Telegram
// function dispatch_tg(text) {
//   const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
//   const data = {
//     chat_id: chatId,
//     text: text,
//   };

//   // Отправляем POST-запрос на сервер Telegram
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   //   .then(response => response.json())
//   //   .then(result => {
//   //     alert('Сообщение успешно отправлено:', result);
//   //   })
//   // alert.catch(error => {
//   //   alert.error('Ошибка при отправке сообщения:', error);
//   // });
// }

// // Получаем кнопку по ID
// const sendButton = document.getElementById('sendButton');

// // Добавляем обработчик события при нажатии на кнопку
// sendButton.addEventListener('click', () => {
//   // Получаем значения полей формы
//   const name = document.getElementById('name');
//   const phone = document.getElementById('phone');
//   const comment = document.getElementById('comment');

//   // Формируем сообщение для отправки
//   const dis_tg = `Имя: ${name.value}\nТелефон: ${phone.value}\nВопрос: ${comment.value}`;

//   // Отправляем сообщение в Telegram
//   dispatch_tg(dis_tg);

//   // Очищаем поля формы
//   name.value = '';
//   phone.value = '';
//   comment.value = '';
// });
