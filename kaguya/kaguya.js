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
})
