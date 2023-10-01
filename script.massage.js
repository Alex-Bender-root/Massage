
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
function sendMessage() {
  // Получаем значения полей формы
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const comment = document.getElementById('comment').value;

  // Формируем сообщение для WhatsApp
  const message = `${name}\n${phone}\nВопрос: ${comment}`;

  // Ссылка для отправки на WhatsApp
  const whatsappLink = `https://wa.me/+79271211063/?text=${encodeURIComponent(message)}`;

  // Перенаправляем пользователя на WhatsApp
  window.location.href = whatsappLink;
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





