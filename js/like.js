    function LikePost(a,b,c){b=b.replace("http://","");var sArray=b.split("/");c.setAttribute("onclick","");c.setAttribute("style","width:21px;");c.setAttribute("src","http://static.tumblr.com/j1tjexd/L29m8ed3a/manolescent-like-2.png");document.getElementById("likes_frame").setAttribute("src","http://www.tumblr.com/like/"+sArray[3]+"?id="+a);document.getElementById("note_count_"+a).innerHTML=parseInt(document.getElementById("note_count_"+a).innerHTML)+1;}
 
function TrimURL(Len,SourceURL)
{
if(SourceURL.length > Len)
{
document.write(SourceURL.substring(0,Len) + "...");
}else
{
    document.write(SourceURL);
}
}
function SetUpNotes()
{
$("ol.notes li.like a").tipsy({opacity:0.95,title:function(){return this.getAttribute("original-title") + " liked this"}});
$("ol.notes li.reblog a").tipsy({opacity:0.95,title:function(){return this.getAttribute("original-title") + " reblogged this"}});    
$("ol.notes li.answer").tipsy({opacity:0.95,title:function(){return "\"" + $(this).find(".answer_content").html() + "\"";}});  
$("ol.notes li.reply").tipsy({opacity:0.95,title:function(){return "\"" + $(this).find(".answer_content").html() + "\"";}});   
$(".notes .source_tumblelog").hide();
$(".notes .clear").hide();
 
 
 
$('ol.notes img').each(function(){
    var t=$(this);
$('.more_notes_link').html("+");
    this.src = this.src.replace("_16","_40");
});
 
$('.more_notes_link').click(function(){
        setTimeout('SetUpNotes()', 1500);
});}