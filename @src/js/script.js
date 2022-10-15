// слайдер отзывы
$('.work-slider').slick({
    dots: false,
    // prevArrow: '<button class="slider-arrow prev"><img src="img/dist/index/prev-arrow.svg" alt="prev"></button>',
    // nextArrow: '<button class="slider-arrow next"><img src="img/dist/index/next-arrow.svg" alt="prev"></button>',
    infinite: true,
    arrows: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
        }
    ]
});







/* Открытие/закрытие мобильного меню
=========================================================================== */
$(function () {
    $('.burger-icon').on('click', function () {
        $('.mobile-menu').toggleClass('active')
        $('.overlay').toggleClass('show')
        $('.fullpage').toggleClass('hide')
        $('body').addClass('hidden')
    })

    $('.close-menu').on('click', function () {
        $('.mobile-menu').removeClass('active')
        $('.overlay').removeClass('show')
        $('.fullpage').removeClass('hide')
        $('body').removeClass('hidden')
    })

    $('.overlay, .mobile-item__1').on('click', function () {
        $('.mobile-menu').removeClass('active')
        $('.overlay').removeClass('show')
        $('.fullpage').removeClass('hide')
        $('body').removeClass('hidden')
    })  
})


document.body.onkeydown = function (e) {
    if (e.keyCode == 27) {
        $('.mobile-menu').removeClass('active');
        $('.burger-icon').removeClass('active');
        $('.overlay').removeClass('show');
        $('.fullpage').removeClass('hide');
        $('.modal-overlay').removeClass('show');
        $('.wrap-modal').removeClass('show');
        $('.modal-window').removeClass('show');
        $('body').removeClass('hidden')
        $('.response-result').html('')
        $('input').val('')
        $('.message-error-phone, .message-error-name').css({ display: 'none' })
    }
};


// модальное окно request
$('.request-btn').on('click', function () {
    $('.request-overlay').toggleClass('show')
    $('.request-modal').toggleClass('show')
    $('.request-modal-window').toggleClass('show')
    $('body').addClass('hidden')
    $('.request-form').css({ display: 'block' })
    $('.response-result').css({ display: 'none' })
    $('input').removeClass('error')
})

$('.request-overlay').on('click', function () {
    $('.request-overlay').removeClass('show')
    $('.request-modal').removeClass('show')
    $('.request-modal-window').removeClass('show')
    $('.input, .input-modal').removeClass('error')
    $('body').removeClass('hidden')
    $('.response-result').html('')
    $('input').val('')
    $('.message-error-phone, .message-error-name').css({ display: 'none' })
})

$('.close-modal').on('click', function () {
    $('.modal-overlay').removeClass('show')
    $('.request-modal').removeClass('show')
    $('.request-modal-window').removeClass('show')
    $('.ticket-modal').removeClass('show')
    $('.ticket-modal-window').removeClass('show')
    $('.input, .input-modal').removeClass('error')
    $('body').removeClass('hidden')
    $('.response-result').html('')
    $('input').val('')
    $('.message-error-phone, .message-error-name').css({ display: 'none' })
})



// модальное окно заказать билет
// $('.ticket-btn').on('click', function () {
//     $('.ticket-overlay').toggleClass('show')
//     $('.ticket-modal').toggleClass('show')
//     $('.ticket-modal-window').toggleClass('show')
//     $('body').addClass('hidden')
// })
// $('.ticket-overlay').on('click', function () {
//     $('.ticket-overlay').removeClass('show')
//     $('.ticket-modal').removeClass('show')
//     $('.ticket-modal-window').removeClass('show')
//     $('.input, .input-modal').removeClass('error')
//     $('body').removeClass('hidden')
// })




// маска для телефона 

var elements = document.querySelectorAll('.input-phone');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}







// стрелка scroll-up
$(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.arrow-up').addClass('active');
        } else {
            $('.arrow-up').removeClass('active');
        }
    });

    $('.arrow-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});





// добавление своих классов в виджете timepad
function windowSize(){
    if ($(window).width() <= '700'){
        $('.main-title, .main-subtitle, .space, .buy, .top-text, .bottom-text, .work-title, .contacts-col').removeClass('wow')
    }
}

// или "два-в-одном", вместо двух последних строк:
$(window).on('load resize',windowSize);






// отслеживание нажатися кнопки назад на телефоне
// $(window).on("navigate", function (event, data) {
//     var direction = data.state.direction;
//     if (direction == 'back') {
//         alert('navigate')
//     }
//     if (direction == 'forward') {
//         // do something else
//     }
// });

// $(window).on("popstate",function(e){
//     alert('popstate');
// });






// document.addEventListener("backbutton", onBackKeyDown, false);
// function onBackKeyDown() {
//     alert('backbutton, onBackKeyDown');
// }



document.addEventListener("backbutton", onBackButton);
function onBackButton(e){
    console.log('backbutton');
    $('.mobile-menu').removeClass('active')
}




// Карта 
var map = L.map('map').setView([55.7678413, 37.6140647], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.7678413, 37.6140647]).addTo(map)
    .bindPopup('МОСКВА, ПЕТРОВКА 28, ГАЛЕРЕЯ ART-OFFICE GALLERY FEDINI')
    .openPopup();

    var baseLayers = {
        "Mapbox": mapbox,
        "OpenStreetMap": osm
    };
    
    var overlays = {
        "Marker": marker,
        "Roads": roadsLayer
    };
    
    L.control.layers(baseLayers, overlays).addTo(map);





