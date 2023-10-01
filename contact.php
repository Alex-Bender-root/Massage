<?php
include('header.php');
?>

<body>
  <div class="page" id="page_contact">

    <div class="gv">

      <div class="contact_gv">
        <h3>Контакты</h3>
        <h6>СТУДИЯ МАССАЖА «ИНЬ-ЯНЬ»</h6>
        <p>г Балаково</p>
        <p>ул Степная 35/3</p>
        <h4><a href="tel:+79271211063">+7-927-121-10-63</a></h4>

        <div class="content_contact_gv_ic">
          <div class="tg_gv">
            <a href="https://t.me/+79271211063">
              <img src="img/header/tg.webp" alt="телеграмм">
            </a>
          </div>
          <div class="whats_gv">
            <a href="https://wa.me/+79271211063">
              <img src="img/header/wh.webp" alt="ватсап">
            </a>
          </div>
        </div>

      </div>



      <div class="form-container">
        <form id="myForm">
          <div class="form_question">
            <h5>Остались вопросы?</h5>
          </div>
          <div class="form-group">
            <input class="input_comment" type="text" id="name" name="name" placeholder="Имя">
          </div>
          <div class="form-group">
            <input class="input_comment" type="number" id="phone" name="phone" placeholder="Телефон">
          </div>
          <div class="form-group">
            <textarea class="input_comment textarea_comment" id="comment" name="comment" rows="4" placeholder="Ваш вопрос"></textarea>
          </div>
          <button class="but_send" type="button" onclick="sendMessage()">ОТПРАВИТЬ</button>
        </form>
      </div>

    </div>



    <div class="cf">
      <h4>Как нас найти?</h4>
      <div class="content_cf">
        <h6>Автобусная остановка "Аэлита"</h6>
        <p>Конченая автобуса 21 и 9. Проходящий рядом автобус 10А и 15. </p>
      </div>

    </div>


    <div class="pj">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.444373496988!2d47.84075343252677!3d52.02462663680795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416b8eaf673e3e79%3A0x44cfdbd80bf52002!2z0YPQuy4g0KHRgtC10L_QvdCw0Y8sINCR0LDQu9Cw0LrQvtCy0L4sINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNDEzODYz!5e0!3m2!1sru!2sru!4v1694724946581!5m2!1sru!2sru" width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>









  </div>
</body>
<?php
include('footer.php');
?>