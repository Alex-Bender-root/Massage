
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









// всплывающие описание товара в карточке продукта, в Card_Product
$(document).ready(function () {
  $('.but_Card').click(function (look) {
    $(this).siblings('.specific_info').first().toggleClass('active');
  });
  $('.info_close').click(function (look) {
    $(this).closest('.specific_info').removeClass('active');
  });
});








if (window.location.href.includes('PC_Home.php')) {
  // Подбор по параметрам PC_Home 
  // Ждем, пока страница полностью загрузится
  document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылки на элементы, которые нужно показывать/скрывать
    const needsGame = document.getElementById('needs__game');
    const needsGraphics = document.getElementById('needs__Graphics');
    const needsPrograms = document.getElementById('needs__programs');
    const needsProcessors = document.getElementById('needs__processors');
    // Добавляем обработчики событий на элементы с определенными классами
    document.querySelector('.needs_game').addEventListener('click', () => {
      showElement(needsGame);
      $(".Sel_par_needs div").removeClass("button_presed");
      $('.needs_game').toggleClass("button_presed");
    });
    document.querySelector('.needs_Graphics').addEventListener('click', () => {
      showElement(needsGraphics);
      $(".Sel_par_needs div").removeClass("button_presed");
      $('.needs_Graphics').toggleClass("button_presed");
    });
    document.querySelector('.needs_programs').addEventListener('click', () => {
      showElement(needsPrograms);
      $(".Sel_par_needs div").removeClass("button_presed");
      $('.needs_programs').toggleClass("button_presed");
    });
    document.querySelector('.needs_processors').addEventListener('click', () => {
      showElement(needsProcessors);
      $(".Sel_par_needs div").removeClass("button_presed");
      $('.needs_processors').toggleClass("button_presed");
    });
    // Функция для скрытия всех элементов и показа выбранного
    function showElement(elementToShow) {
      // Скрываем все элементы, кроме выбранного
      if (elementToShow !== needsGame) {
        needsGame.style.display = 'none';
      }
      if (elementToShow !== needsGraphics) {
        needsGraphics.style.display = 'none';
      }
      if (elementToShow !== needsPrograms) {
        needsPrograms.style.display = 'none';
      }
      if (elementToShow !== needsProcessors) {
        needsProcessors.style.display = 'none';
      }
      // Показываем выбранный элемент
      elementToShow.style.display = 'grid';
    }
  });
}











if (window.location.href.includes('working-series.php')) {
  // Справится с любой задачей в рабочих станциях переключение: 3d видеомантаж графика
  // Ждем, пока страница полностью загрузится
  document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылки на элементы, которые нужно показывать/скрывать
    const d3model = document.getElementById('d3_model');
    const videoediting = document.getElementById('video_editing');
    const graphicarts = document.getElementById('graphic_arts');
    // Добавляем обработчики событий на элементы с определенными классами
    document.querySelector('.sel_3d').addEventListener('click', () => {
      showElement(d3model);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_3d').toggleClass("sel_still");
    });
    document.querySelector('.sel_vid').addEventListener('click', () => {
      showElement(videoediting);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_vid').toggleClass("sel_still");
    });
    document.querySelector('.sel_graph').addEventListener('click', () => {
      showElement(graphicarts);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_graph').toggleClass("sel_still");
    });
    // Функция для скрытия всех элементов и показа выбранного
    function showElement(elementToShow) {
      // Скрываем все элементы, кроме выбранного
      if (elementToShow !== d3model) {
        d3model.style.display = 'none';
      }
      if (elementToShow !== videoediting) {
        videoediting.style.display = 'none';
      }
      if (elementToShow !== graphicarts) {
        graphicarts.style.display = 'none';
      }
      // Показываем выбранный элемент
      elementToShow.style.display = 'grid';
    }
  });
}













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












if (window.location.href.includes('delivery.php')) {
  // Справится с любой задачей в рабочих станциях переключение: 3d видеомантаж графика
  // Ждем, пока страница полностью загрузится
  document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылки на элементы, которые нужно показывать/скрывать
    const d3model = document.getElementById('d3_model');
    const videoediting = document.getElementById('video_editing');
    const graphicarts = document.getElementById('graphic_arts');
    // Добавляем обработчики событий на элементы с определенными классами
    document.querySelector('.sel_3d').addEventListener('click', () => {
      showElement(d3model);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_3d').toggleClass("sel_still");
    });
    document.querySelector('.sel_vid').addEventListener('click', () => {
      showElement(videoediting);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_vid').toggleClass("sel_still");
    });
    document.querySelector('.sel_graph').addEventListener('click', () => {
      showElement(graphicarts);
      $(".any_task_cont_selection div").removeClass("sel_still");
      $('.sel_graph').toggleClass("sel_still");
    });
    // Функция для скрытия всех элементов и показа выбранного
    function showElement(elementToShow) {
      // Скрываем все элементы, кроме выбранного
      if (elementToShow !== d3model) {
        d3model.style.display = 'none';
      }
      if (elementToShow !== videoediting) {
        videoediting.style.display = 'none';
      }
      if (elementToShow !== graphicarts) {
        graphicarts.style.display = 'none';
      }
      // Показываем выбранный элемент
      elementToShow.style.display = 'grid';
    }
  });
}