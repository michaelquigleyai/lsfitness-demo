(function(){
  function london(d){
    var p={};new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).formatToParts(d).forEach(function(x){p[x.type]=x.value;});
    return p.year+'-'+p.month+'-'+p.day+'T'+p.hour+':'+p.minute;
  }
  var q=new URLSearchParams(location.search).get('now');
  var now=(q&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(q))?q:london(new Date());
  document.querySelectorAll('[data-show-until]').forEach(function(el){
    if(now>el.getAttribute('data-show-until'))el.remove();
  });
})();
