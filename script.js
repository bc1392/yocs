const setMenu = $('#set-menu-wrap')
const setMenuGears = $('#set-menu-open, #set-menu-close')
const setMenuOpen = $('#set-menu-open')
const mainContain = $('#main')

$(document).ready(function(){

    setMenu.sidenav({

        onOpenStart: () => {
            setMenuGears.addClass('screw-in'); setMenuOpen.addClass('faded-in')
            mainContain.addClass('blur-in')
        },

        onCloseStart: () => {
            setMenuGears.addClass('screw-out'); setMenuGears.removeClass('screwed')
            mainContain.addClass('blur-out'); mainContain.removeClass('blurred')
        },

        onCloseEnd: () => {
            setMenuOpen.removeClass('faded-in')
        }

    })

    setMenuGears.on('animationend', () => {
        if ( setMenuGears.hasClass('screw-in') ) { setMenuGears.addClass('screwed'); setMenuGears.removeClass('screw-in') }
        if ( setMenuGears.hasClass('screw-out') ) { setMenuGears.removeClass('screwed screw-out') }
    })

    mainContain.on('animationend', () => {
        if ( mainContain.hasClass('blur-in') ) { mainContain.addClass('blurred'); mainContain.removeClass('blur-in') }
        if ( mainContain.hasClass('blur-out') ) { mainContain.removeClass('blurred blur-out') }
    })

    setTimeout(() => {
        setMenuOpen.removeClass('faded-in')
    }, 500)

    setInterval(() => {
        const date = new Date(); const hour = date.getHours(); const minute = date.getMinutes()
    }, 1250)

})