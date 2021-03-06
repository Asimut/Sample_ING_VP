(function($){
    $('#app').on('DOMNodeInserted', function(e) {       

      // Mobile toggle fixed text block
      var idArr = ['cl5mbcsof000g356q53gt52t4', 'cl5mblavp001e356qgadpv8xj', 'cl5mbnvvh001t356qw6cg2ch2'];

      for (let i=0; i<idArr.length; i++) {
        const element = idArr[i];

        clickToggle(element);        
      }

      function clickToggle (id){      
        var fixedBlockId = id;
        if($('[data-block-id="'+fixedBlockId+'"]').length){
          var count = 0;
          $('[data-block-id="'+fixedBlockId+'"] .block-text__container .block-text__row:first-child').on('click', function(){
            if(count==0){
              count++;
              $(this).closest('.block-text__container').addClass('open');
            }else{
              count=0;
              $(this).closest('.block-text__container').removeClass('open');            
            }          
          });
        }   
      }


      
      fixedPlace(); //Text block
      fixedPlace2(); //Image block
      fixedPlace3(); //Text block

      $(window).on('resize', function(){
        fixedPlace(); 
        fixedPlace2();
        fixedPlace3();
      });

      $('.page-menu-toggle').on('click', function(){
        console.log('click');
        setTimeout(fixedPlace, 500);
        setTimeout(fixedPlace2, 500);
      });

      function fixedPlace() {
        if (1400 < window.innerWidth) {

          var elFixed = $('#app [data-block-id="cl5mbcsof000g356q53gt52t4"] .block-text__container');

          if(elFixed.length){
          var leftOffset = $('[data-block-id="cl4zr0344000t3b6qvgdq5stu"] .blocks-accordion__wrapper').offset().left,
              contentWidth = $('[data-block-id="cl4zr0344000t3b6qvgdq5stu"] .blocks-accordion__wrapper').outerWidth();
              

          var a = $(window).width() - (leftOffset + contentWidth),
              aNew = a - $('[data-block-id="cl5mbcsof000g356q53gt52t4"] .block-text__container').outerWidth() - 10;

          elFixed.css({
            right: aNew,
          });
        }
        }
      }
      function fixedPlace2() {
        if (1400 < window.innerWidth) {

          var elFixed2 = $('#app [data-block-id="cl5mblavp001e356qgadpv8xj"] .block-image__container');

          if(elFixed2.length){          
            var leftOffset = $('[data-block-id="cl507pnou000s3b6q6wtwk6o2"] .blocks-accordion__wrapper').offset().left,
                contentWidth = $('[data-block-id="cl507pnou000s3b6q6wtwk6o2"] .blocks-accordion__wrapper').outerWidth();                

            var a = $(window).width() - (leftOffset + contentWidth),
                aNew2 = a - $('[data-block-id="cl5mblavp001e356qgadpv8xj"] .block-text__container').outerWidth() - 10;

            elFixed2.css({
              right: aNew2,
            });
          }
        }
      }

      function fixedPlace3() {
        if (1400 < window.innerWidth) {

          var elFixed = $('#app [data-block-id="cl5mbnvvh001t356qw6cg2ch2"] .block-text__container');

          if(elFixed.length){
          var leftOffset = $('[data-block-id="cl5012uvx000y3b6q4kry734c"] .fr-view').offset().left,
              contentWidth = $('[data-block-id="cl5012uvx000y3b6q4kry734c"] .fr-view').outerWidth();
              

          var a = $(window).width() - (leftOffset + contentWidth),
              aNew = a - $('[data-block-id="cl5mbnvvh001t356qw6cg2ch2"] .block-text__container').outerWidth() - 10;

          elFixed.css({
            right: aNew,
          });
        }
        }
      }
    });         

  })(jQuery); 
  