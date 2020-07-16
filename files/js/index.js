/** @format */

$(document).ready(function () {
  $.get(
    "http://ipinfo.io",
    function (response) {
      if (response.country === "RU") {
        $("#location").text("России");
      } else {
        $("#location").text("Страны СНГ");
      }
    },
    "jsonp"
  );

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  var p = new Date();
  var date = p.addDays(2);
  monthA = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  formatted_date =
    date.getDate() + "." + monthA[date.getMonth()] + "." + date.getFullYear();
  $(".x_price_previous").text(formatted_date);
  var product_count = Number(localStorage.getItem("product_count")) || 60;

  $(".lastpack").text(product_count);
  change_count = setInterval(set_count, 10000);
  function set_count() {
    if (product_count < 7) {
      clearInterval(change_count);
    } else {
      localStorage.setItem("product_count", product_count);
      $(".lastpack").text(product_count--);
    }
  }
  $(".phone_mask").mask("+(99) 9999999");

});


function parsUrl() {
    var url = new URLSearchParams(window.location.search);
    $.urlParam = function (name) {
      var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );
      if (results == null) {
        return null;
      }
      return decodeURI(results[1]) || 0;
    };

    var call_back_param = $.urlParam("callback");
    if (call_back_param != null) {
      alert(`Есть параметр callback, со значением: ${call_back_param}`);
    }
  }
var is_open = false;
$(".mouse_moved").mouseleave(function () {
  var displayP1 = $(".popup-phone").css("display");
  var displayP2 = $(".popup-callback").css("display");
  if (displayP1 == "none" && displayP2 == "none" && !is_open) {
    $(".modal_mouse_out").show();
    is_open = true;
  } else {
    $(".modal_mouse_out").hide();
  }
});
$(document).ready(function () {
  /* modal */

  $(".close-mouse").on("click", function (event) {
    event.preventDefault();
    $(".popup-callback").hide();
    $(".popup-phone").hide();
    $(".modal_mouse_out").hide();
  });

  $(".popup-mouseleave .close-modal,.popup-mouseleave .close-img").on(
    "click",
    function (event) {
      event.preventDefault();
      $(".popup-mouseleave").addClass("hide");
    }
  );
  $(".close-phone").click(function () {
    $(".popup-phone").hide();
  });

  var $code = $(".check_popup_code_input"),
    $message = $(".js-message"),
    $button = $(".button-popup-first");

  var codeValues = /^\d+$/;

  $button.on("click", function (ev) {
    ev.preventDefault();
    var $codeLenght = $(".check_popup_code_input").val().length;
    var codeValue = $code.val();

    if (codeValues.test(codeValue) && $codeLenght == 15) {
      return $message.text(
        "Данный код верен. Cпасибо, что выбрали нашу продукцию!"
      );
    } else if (
      $code.val() !== "" &&
      $code.val() !== " " &&
      $code.val() !== "  "
    ) {
      return $message.text(
        "Данный код верен. Cпасибо, что выбрали нашу продукцию!"
      );
    } else {
      return $message.text("Введите, пожалуйста, код.");
    }
  });

parsUrl();

});

var mouse = false;
var popUpBy = true;
var checkCode = false;
var todayBayVal = false;
var bPhone = false;
var mBrowser = false;
var internetEx = false;
var safariWin = false;
var fireFox = false;
var lastPackNum = "three";

$(document).ready(function () {
  var countryCodeLocation = $("input[name='country_code']").val();
  //Выход мышки
  function mouseMoved() {
    $("body").append(
      '<div class="mouse"><div class="line_top mouse_moved"></div></div>'
    );
    var flag = true;
    $(".mouse_moved").mouseover(function () {
      if (flag == true) {
        var displayPop = $(".call-back-head").css("display");
        var displayP = $(".call-back-phone").css("display");
        if (displayPop == "none" && displayP == "none") {
          $(".mouse-moved-up").show();
        }
        flag = false;
      }
    });
  }
  //PopUp на заказы

  //Функция проверки ввода кода функцый
  function codeCheck() {
    var $code = $(".check_popup_code_input"),
      $message = $(".js-message"),
      $button = $(".button-popup-first");

    var codeValues = /^\d+$/;

    $button.on("click", function (ev) {
      ev.preventDefault();
      var $codeLenght = $(".check_popup_code_input").val().length;
      var codeValue = $code.val();

      if (codeValues.test(codeValue) && $codeLenght == 15) {
        return $message.text(
          "Данный код верен. Cпасибо, что выбрали нашу продукцию!"
        );
      } else if (
        $code.val() !== "" &&
        $code.val() !== " " &&
        $code.val() !== "  "
      ) {
        return $message.text(
          "К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт."
        );
      } else {
        return $message.text("Введите, пожалуйста, код.");
      }
    });
  }
  //Количество купленых товаров на данный момент
  function NowTime() {
    var d = new Date();
    var result = (d.getHours() * 60 + d.getMinutes()) * 2 + 2000;
    $("#todayBay").html(result);
  }
  //Добавить синюю трубку телефона
  function bluePhone() {
    $("body").append(
      '<div class="bluePhone"><div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a  class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div></div>'
    );
  }
  //Стили для браузеров
  function mobileBrowser() {
    function safari_windows() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("safari") != -1) {
        if (ua.indexOf("chrome") > -1) {
          var a = 1;
        } else {
          var tag_css = document.createElement("link");
          var basePath = window.cdn_path || "";
          tag_css.type = "text/css";
          tag_css.rel = "stylesheet";
          tag_css.href = basePath + "css/safari.css";
          var tag_head = document.getElementsByTagName("head");
          tag_head[0].appendChild(tag_css);
        }
      }
    }
    function firefox() {
      var browser = navigator.userAgent.toLowerCase();
      if (browser.indexOf("firefox") > -1) {
        var basePath = window.cdn_path || "";
        var tag_css = document.createElement("link");
        tag_css.type = "text/css";
        tag_css.rel = "stylesheet";
        tag_css.href = basePath + "css/firefox.css";
        var tag_head = document.getElementsByTagName("head");
        tag_head[0].appendChild(tag_css);
      } else {
        // If another browser, return 0
        var b = 1;
      }
      return false;
    }
    function internet_explorer() {
      var basePath = window.cdn_path || "";
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        var tag_css = document.createElement("link");
        tag_css.type = "text/css";
        tag_css.rel = "stylesheet";
        tag_css.href = basePath + "css/ie.css";
        var tag_head = document.getElementsByTagName("head");
        tag_head[0].appendChild(tag_css);
      } else {
        // If another browser, return 0
        var b = 1;
      }
      return false;
    }
    function checkBrowser() {
      if (internetEx == true) {
        internet_explorer();
      }
      if (safariWin == true) {
        safari_windows();
      }
      if (fireFox == true) {
        firefox();
      }
    }
    checkBrowser();
  }
  //Стили для браузеров конец
  //Функция проверки и включения/выключения функцый
  function check() {
    if (mouse == true) {
      mouseMoved();
    }
    if (checkCode == true) {
      codeCheck();
    }
    if (todayBayVal == true) {
      NowTime();
      setInterval(NowTime, 1000);
    }
    if (bPhone == true) {
      bluePhone();
    }
    if (mBrowser == true) {
      mobileBrowser();
    }
  }
  check();
  // document ready конец
});
