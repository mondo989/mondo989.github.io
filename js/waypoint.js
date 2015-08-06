$('.recentProjects-copy').waypoint( function(){
  $('.recentProjects-copy').addClass('active');
  $('.first-row').addClass('active');
  $('.circle-anim').addClass('active');
},{
  offset: '45%'
});

$('.success').waypoint( function(){
  $('.left').addClass('active');
  $('.right').addClass('active');
},{
  offset: '85%'
});
