
// шапка
$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_burger,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');   // этим мы убираем прокрутку при открытом меню
  });
});
// $(".connect_img, .connect_icon").hover(function(event){          // отображение иконок при наведении на другой див
// $(".connect_icon_inside img").css({"margin-right":"0px","opacity": "0.5","transition": "all 3s ease"}); //так правильно записывать несколько условий в одной строчки









// Часто задаваемые вопросы
document.addEventListener('DOMContentLoaded', function () {
  let coll = document.getElementsByClassName('FAQ');
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});











if (window.location.href.includes('certificates.php')) {
  // модальное всплывающее окно, формы отправки данных пользователя
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
}











$(document).ready(function () {
  // Отображение изображения в модальном окне
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

