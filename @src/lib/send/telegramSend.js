
$(function () {

   $(".request-form").on('submit', function (event) {
     event.preventDefault();
     
     // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
     let form = $('#' + $(this).attr('id'))[0];
      
     // Сохраняем в переменную класс с параграфом для вывода сообщений
     let message = $(this).find(".response-result");
     let error = true
     let fd = new FormData(form);

      $('.input-wrap input').on('focus', function() {
        $(this).parent().removeClass('error')
        $('.message-error').css({display: 'none'})
      })

      // if ($('.message-error-name, .message-error-phone').css({display: 'block'})) {
      //   $('.input-wrap input').css('margin-bottom', '14px')
      // }

      // if ($('input[type="checkbox"]').checked) {
        
      // }

      if ($('#name').val() == '' && $('#phone').val() == '') {
        $('.message-error-name').css({ display: 'block' })
        $('#name').parent().addClass('error')
        $('.message-error-phone').css({ display: 'block' })
        $('#phone').parent().addClass('error')
      }

      else if ($('#name').val() == '') {
        $('.message-error-name').css({ display: 'block' })
        $('#name').addClass('error')
        $('.message-error-phone').css({ display: 'none' })
        $('#phone').removeClass('error')
        error = true

     } else if ($('#phone').val() == '') {
        $('.message-error-phone').css({ display: 'block' })
        $('#phone').addClass('error')
        $('.message-error-name').css({ display: 'none' })
        $('#name').removeClass('error')
        error = true
     } else {
      error = false
      $.ajax({
        url: "/lib/send/telegram.php",
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        success: function success(res) {
          // let respond = $.parseJSON(res);
          $('.response-result').html('Спасибо, ваши данные успешно отправлены. Мы свяжемся с вами в ближайшее время').css({ color:'#dac4f0', display: 'block' });
          $('.request-form').css({ display: 'none' })
          $('.input-wrap input').val('')
        },
        error: function error(res) {
          $('.response-result').html('К сожалению произошла ошибка при отправке данных, попробуйте снова').css({ color:'#d42121', display: 'block' });
          $('.request-form').css({ display: 'none' })
          $('.input-wrap input').val('')
        }
      });
     }
     
   });
      
   });