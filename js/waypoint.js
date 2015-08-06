$('.recentProjects-copy').waypoint( function(){
  $('.recentProjects-copy').addClass('active');
  $('.first-row').addClass('active');
  $('.circle-anim').addClass('active');
  $('.scroll-down').addClass('inactive');
},{
  offset: '45%'
});

$('.success').waypoint( function(){
  $('.left').addClass('active');
  $('.right').addClass('active');
},{
  offset: '85%'
});

$('.footer-above').waypoint( function(){
  $('.btn-right').addClass('active');
},{
  offset: '75%'
});
