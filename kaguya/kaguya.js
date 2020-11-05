$(window).on('load', () => {

  // ページ遷移時のアニメーション
  $('main, footer').css('display', 'none').fadeIn(300);
  $('a').on('click', (e) => {
    $('main, footer').fadeOut(300);
    setTimeout(() => {
      location.href = $(e.currentTarget).attr('href');
    }, 300);
    e.preventDefault();
  });

  // ハンバーガーメニュー
  $('.nav_toggle').on('click', (e) => {
    $('.nav_toggle').toggleClass('show');
    $(e.currentTarget).next().slideToggle();
  });
  $('.nav_menu_li').on('click', () => {
    $('.nav_toggle').removeClass('show');
    $('.nav').slideUp(200);
  });
})
