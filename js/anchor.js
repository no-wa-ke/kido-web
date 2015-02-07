$().ready(function(){
	
	$(".tabcontent nav a:first").addClass('active');
	$(".tabcontent .tab").hide();
	$(".tabcontent .tab:first").show();
	
	function tabContent(name){
		var $this = $(".tabcontent nav").find("[rel='"+name+"']");
		var $rel = name;
		$(".tabcontent nav a").removeClass('active');
		$this.addClass('active');
		$(".tabcontent .tab").hide();
		$('#'+$rel).show();
	}
	$(".tabcontent nav a").click(function(e){
		var $rel = $(this).attr('rel');
		tabContent($rel);
	});
	if(window.location.hash && window.location.hash!="#"){
		$rel = window.location.hash.replace('#','tab');;
		tabContent($rel);
  }

});