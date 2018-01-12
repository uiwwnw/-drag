$.fn.drag = function(opt) {
    var $ctrl = {};
    $ctrl.drag = false;
    $ctrl.el = $(this);
    $ctrl.tar = (opt === undefined) ? $ctrl.el : $ctrl.el.find(opt);
    $ctrl.W = 0;
    $ctrl.H = 0;
    $ctrl.windowW = 0;
    $ctrl.windowH = 0;
    $ctrl.startX = 0;
    $ctrl.startY = 0;
    $ctrl.currentX = 0;
    $ctrl.currentY = 0;
    
    $(window).on('mouseup', function(event) {
        $ctrl.drag = false;
        
    }).on('mousemove', function(event) {
        if ($ctrl.drag) {
            $ctrl.poX = event.pageX - $ctrl.startX + $ctrl.currentX;
            $ctrl.poY = event.pageY - $ctrl.startY + $ctrl.currentY;
            $ctrl.el.css('transform', 'translate('+$ctrl.poX+'px,'+$ctrl.poY+'px)');
        }
    });
    
    $ctrl.tar.on('mousedown', function(event) {
        $ctrl.drag = true;
        $ctrl.startX = event.pageX;
        $ctrl.startY = event.pageY;
        $ctrl.currentX = ($ctrl.poX === undefined) ? 0 : $ctrl.poX;
        $ctrl.currentY = ($ctrl.poY === undefined) ? 0 : $ctrl.poY;
        $ctrl.windowW = $(window).width();
        $ctrl.windowH = $(window).height();
        $ctrl.W = $ctrl.el.outerWidth();
        $ctrl.H = $ctrl.el.outerHeight();
    });
};