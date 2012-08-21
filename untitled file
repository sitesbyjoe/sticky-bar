$('.sidebar').removeClass('sticky');

var sticky = sticky || {};

sticky.page = {
        height: $(document).height(), 
        viewportHeight: $(window).height(), 
        sidebar: (($('.sidebar').height()) + 40)
    };


sticky.zone = {  
        top: 170,  
        //bottom: (($(document).height() - 454) - sticky.page.sidebar)
        bottom: (($(document).height() - 454))
    };


console.log('-----stats-------');
console.log('doc height: ' + sticky.page.height);
console.log('top margin: ' + sticky.zone.top);
console.log('sidebar: ' + sticky.page.sidebar);
console.log('bottom margin: ' + sticky.zone.bottom);

$(document).scroll(function() {
    var yLoc = $(document).scrollTop();
    var sidebarBottom = (Number(yLoc) + Number(sticky.page.sidebar));

    //console.log(yLoc);
    //if ((yLoc >= sticky.zone.top) && ((Number(yLoc) + sticky.page.sidebar) <= sticky.zone.bottom)) {
    if ((yLoc >= sticky.zone.top) && (sidebarBottom <= sticky.zone.bottom)) {
        console.log('y sb top: ' + yLoc);
        console.log('y sb bot: ' + sidebarBottom);
        //$('body').css('background', 'orange');
        $('.sidebar').attr('style', '');
        $('.sidebar').addClass('sticky');
    } else {
        console.log('n sb top: ' + yLoc);
        console.log('n sb bot: ' + sidebarBottom);
        //$('body').css('background', 'lime');
        //console.log($('.sidebar').offset.top());
        
        $('.sidebar').removeClass('sticky');
        
        if (yLoc > sticky.zone.top) {
            //console.log('npw top:' + (yLoc));
            //$('sidebar').css('margin-top',        
            $('.sidebar').css('position', 'absolute');
            $('.sidebar').css('bottom', '50px');
            
        }
    }
});