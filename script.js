$(document).ready(function(){

    const setMenuCtl = $('#set-menu-open, #set-menu-close')
    $('#settings').sidenav({
        onOpenStart: () => { setMenuCtl.addClass('screw-in') },
        onCloseStart: () => { setMenuCtl.addClass('screw-out'); setMenuCtl.removeClass('screwed') }
    })
    setMenuCtl.on('animationend', () => {
        if ( setMenuCtl.hasClass('screw-in') ) { setMenuCtl.addClass('screwed'); setMenuCtl.removeClass('screw-in') }
        if ( setMenuCtl.hasClass('screw-out') ) { setMenuCtl.removeClass('screwed screw-out') }
    })

})