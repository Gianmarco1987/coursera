<script>
     $(document).ready(function() {
         $('#mycarousel').carousel({ Interval: 2000 });
         $('#carouselButton').click(function() {
             if ($('#carouselButton').children('span').hasClass('fa-pause')) {
             $('#mycarousel').carousel('pause');   
             $('#carouselButton').children('span').removeClass('fa-pause'); 
             $('#carouselButton').children('span').addClass('fa-play'); 
         }
             else if ($('#carouselButton').children('span').hasClass('fa-play')) {
             $('#mycarousel').carousel('cycle');   
             $('#carouselButton').children('span').removeClass('fa-play'); 
             $('#carouselButton').children('span').addClass('fa-pause'); 
         }
      }); 
      $('#loginbutton').click(function() {
            console.log('yes');
            $('#loginbutton').attr('data-toggle', 'modal');
            $('#loginbutton').attr('data-target', '#loginModal');
        });
        $('#Reservebtn').click(function() {
            console.log('yes');
            $('#Reservebtn').attr('data-toggle', 'modal');
            $('#Reservebtn').attr('data-target', '#ReverveTable');
        });
      
    });
 </script>