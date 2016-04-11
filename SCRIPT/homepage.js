 document.write("<script type='text/javascript' src='SCRIPT/jquery-1.11.3.min.js'></"+"script>");
jQuery("document").ready(function($){
    var nav = $('#out');
    var niv = $('.tag');
    var pos = nav.offset().top;
    var nov = $('#head');
    var newt = $('#tt');
    var i=1;     
    
    $(window).scroll(function () {
      var fix = ($(this).scrollTop() > pos) ? true : false;
    
      nav.toggleClass("scrolled", fix);
      niv.toggleClass("tag1", fix);
      $('body').toggleClass("fix-body", fix);
      nov.toggleClass("rep",fix);

      
    }
                    );
    $("#bas").hide();
    
    $("#bis").click(function(){
      if(i==1)
      {
        $("#bas").show(400);
        i=0;
      }  
      else if(i==0)
      {
        $("#bas").hide(400);
        i=1;
      }
    });
    
    $('#imagi img:gt(0)').hide();
    setInterval(function(){
      $('#imagi :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('#imagi');}, 
      3000);




    //This part onwards is that of the FrontPage div(Dont copy!!!!)
    $("#cf_onclick").click(function() {
  $("#pho img.top").toggleClass("transparent");
    });

    
  });