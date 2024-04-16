$(document).ready(function() {
    // 1. Element selection (using jQuery):
    const card = $('.card');
    const container = $('.container');
    const photo = $('.photo img');
    const title = $('.title');
    const social = $('.social');
    const info = $('.info h4');
    const profile = $('.profile');
  
    // 2. Moving animation event (using jQuery):
    container.on('mousemove', function(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
      card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    });
  
    // 4. Adding animation in (using jQuery):
    container.on('mouseenter', function(e) {
      card.css('transform', 'none');
      photo.css('transform', 'translateZ(50px)');
      title.css('transform', 'translateZ(50px)');
      social.css('transform', 'translateZ(50px)');
      info.css('transform', 'translateZ(50px)');
      profile.css('transform', 'translateZ(50px)');
    });
  
    // 3. Removing animation in (using jQuery):
    container.on('mouseleave', function(e) {
      card.css('transition', 'all 0.5s ease');
      card.css('transform', 'rotateY(0deg) rotateX(0deg)');
    });
  });
  