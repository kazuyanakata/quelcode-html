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

  // news画像ホバー時のアニメーション
  const maxWidth = 375;
  if ($(window).width() > maxWidth) {
    $('.news-item p').hide();
    $('.news-background').hide();
    $('.news-item').on('mouseenter', (e) => {
      $(e.currentTarget)
        .children('.news-background').slideDown()
        .nextAll('p').fadeIn();
    }).on('mouseleave', (e) => {
      $(e.currentTarget)
        .children('.news-background').slideUp()
        .nextAll('p').fadeOut();
    });
  };

  // CONTACTの「SEND」ボタン押下時のアニメーション
  $('#send').on('mouseenter', (e) => {
    $(e.currentTarget).css({
      'backgroundColor': '#707070',
      'color': '#d1d1d1'
    });
  }).on('mouseleave', (e) => {
    $(e.currentTarget).css({
      'backgroundColor': '',
      'color': ''
    });
  }).on('click', (e) => {
    $(e.currentTarget)
      .css({
        'transition': 'width 0.5s',
        'paddingLeft': '0',
        'paddingRight': '0',
        'width': '280px',
        'backgroundColor': '',
        'color': ''
      })
      .attr('value', 'TRANSMISSION COMPLETED')
    e.preventDefault();
  });

  // 「カタログをダウンロード」ボタンホバー時のアニメーション
  $('.download').on('mouseenter', (e) => {
    $(e.currentTarget)
      .css('backgroundColor', '#707070')
      .children().css('color', '#d1d1d1');
  }).on('mouseleave', (e) => {
    $(e.currentTarget)
      .css('backgroundColor', '')
      .children().css('color', '');
  });
})
