// 내가 짠 코드
// $(document).ready(function() {
//   $('.btn-menubar').on('click', function() {
//     $(this).parent().siblings('.main-menu').toggleClass('menu-active');
//   })
// });

$(document).ready(function() {
  var container = $('.menubar-container')
  var btn_menubar = $('.btn-menubar, .menubar');
  var btn = $('.btn-menubar');
  var menu = $('.main-menu');
  var last_item = $('.main-menu > li:last-child li:last-child a')

  btn_menubar.on('click', function() {
    menu.toggleClass('menu-act');
    if (menu.hasClass('menu-act')) {
      btn.text('메인메뉴 닫기');
      // $('.menubar-top').toggleClass('menubar-top-clicked');
      // $('.menubar-middle').toggleClass('menubar-middle-clicked');
      // $('.menubar-bottom').toggleClass('menubar-bottom-clicked');
    } else {
      btn.text('메인메뉴 열기');
      // $('.menubar-top-clicked').toggleClass('menubar-top');
      // $('.menubar-middle-clicked').toggleClass('menubar-middle');
      // $('.menubar-bottom-clicked').toggleClass('menubar-bottom');
    }
  });
  btn_menubar.on('click', function() {
    container.toggleClass('menubar-act');
  });

  last_item.on('focusout', function() {
    menu.removeClass('menu-act');
    container.removeClass('menubar-act');
  })
});