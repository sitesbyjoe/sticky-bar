/*	The Sticky Bar
 *	---------------------------------------------
 *	A javascript object that makes your sidebar 
 *	(or any element really) sticky so it follows 
 *	the reader up an down the page.
 *
 *	@author Joseph R. B. Taylor - joe@sitesbyjoe.com
 *
 *	ToDos:
 *	---------------------------------------------
 *	+ Remove jQuery selectors - no dependencies!
 *	+ Better variable names
 *	+ Code Cleanup
 *
 */
 
$('.sidebar').removeClass('sticky'); // Why the hell is this here?!?! It needs to die.

var stickyBar = {

	// Change your setting here for the top and bottom measurements
	stickyBar.config = {
			top:  170;									// the height of your header, or just distance from the top of the page for the sidebar to start following
			bottom: 454;								// the height of your footer, or just distance from the bottom for the sidebar to stop following
			sidebarPaddingMargins: 40;	// the total vertical margin and padding that is on the sidebar - There's gotta be a way to get this automatically!!!
			
	};

	// Some page variables StickyBar sets on its own
	stickyBar.page = {
      height: $(document).height(), 						// height of the entire document
      viewportHeight: $(window).height(), 			// height of the viewport
      sidebar: (($('.sidebar').height()) + stickyBar.config.sidebarPaddingMargins)	// height of the sidebar itself (plus 40px of padding)
  };	
	
	stickyBar.zone = {  
      top: stickyBar.config.top,  
      bottom: (($(document).height() - stickyBar.config.bottom))
  };
	
	// Spitting out some variables so you can see the measurement
	console.log('-----stats-------');
	console.log('doc height: ' + stickyBar.page.height);
	console.log('top margin: ' + stickyBar.zone.top);
	console.log('sidebar: ' + stickyBar.page.sidebar);
	console.log('bottom margin: ' + stickyBar.zone.bottom);
	
	// Everytime the user scrolls we fire this function
	$(document).scroll(function() {
	
	    var yLoc = $(document).scrollTop();
	    var sidebarBottom = (Number(yLoc) + Number(stickyBar.page.sidebar));
	
	    //console.log(yLoc);
	    if ((yLoc >= stickyBar.zone.top) && (sidebarBottom <= stickyBar.zone.bottom)) {
	        //console.log('y sb top: ' + yLoc);
	        //console.log('y sb bot: ' + sidebarBottom);
	        //$('body').css('background', 'orange');
	        $('.sidebar').attr('style', '').addClass('sticky'); // instead of this class which needs a stylesheet I should apply the styles directly!!!

	        //$('.sidebar').addClass('sticky');
	    } else {
	        
	        //console.log('n sb top: ' + yLoc);
	        //console.log('n sb bot: ' + sidebarBottom);
	        //$('body').css('background', 'lime');
	        //console.log($('.sidebar').offset.top());
	        
	        $('.sidebar').removeClass('sticky'); // instead of this class which needs a stylesheet I should apply the styles directly!!!
	        
	        if (yLoc > stickyBar.zone.top) {
	            //console.log('npw top:' + (yLoc));
	            //$('sidebar').css('margin-top',        
	            $('.sidebar').css('position', 'absolute');
	            $('.sidebar').css('bottom', '50px'); // gotta get rid of that fixed value!!!
	            
	        }
	    }
	});

};