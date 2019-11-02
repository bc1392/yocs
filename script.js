const setMenu = $('#set-menu-wrap')
const setMenuGears = $('#set-menu-open, #set-menu-close')
const setMenuOpen = $('#set-menu-open')

const setMenuFmt = $('#set-menu-format-12, #set-menu-format-24')
const setMenuFmt12 = $('#set-menu-format-12')
const setMenuFmt24 = $('#set-menu-format-24')

const mainContain = $('#main')

const dispHr = $('#hour')
const dispMin = $('#minute')
const dispMid = $('#mid')



if ( localStorage.getItem('has-settings') == 'true' ) {

    if ( localStorage.getItem('hour-format') == '12' ) setMenuFmt12.prop('checked', true)
    else setMenuFmt24.prop('checked', true)

} else {

    localStorage.setItem('has-settings', 'true')
    localStorage.setItem('hour-format', '12'); setMenuFmt12.prop('checked', true)

}



$(document).ready(function(){

    setMenu.sidenav({

        onOpenStart: () => {
            setMenuGears.addClass('screw-in'); setMenuOpen.addClass('faded-in'); mainContain.addClass('blur-in')
        },

        onCloseStart: () => {
            setMenuGears.addClass('screw-out').removeClass('screwed')
            mainContain.addClass('blur-out').removeClass('blurred')
        },

        onCloseEnd: () => { setMenuOpen.removeClass('faded-in') }

    })

    setMenuGears.on('animationend', () => {
        if ( setMenuGears.hasClass('screw-in') ) { setMenuGears.addClass('screwed').removeClass('screw-in') }
        if ( setMenuGears.hasClass('screw-out') ) { setMenuGears.removeClass('screwed screw-out') }
    })

    mainContain.on('animationend', () => {
        if ( mainContain.hasClass('blur-in') ) { mainContain.addClass('blurred').removeClass('blur-in') }
        if ( mainContain.hasClass('blur-out') ) { mainContain.removeClass('blurred blur-out') }
    })

    setTimeout(() => { setMenuOpen.removeClass('faded-in') }, 500)

})



setTimeout(() => {

    setMenuFmt.on('change', () => { setTimeout(updateTime, 25) })
    setMenuFmt12.on('change', () => { if ( setMenuFmt12.prop('checked') ) localStorage.setItem('hour-format', '12') })
    setMenuFmt24.on('change', () => { if ( setMenuFmt24.prop('checked') ) localStorage.setItem('hour-format', '24') })

}, 125)



setInterval(updateTime, 1250); updateTime()
function updateTime() {

    const date = new Date()
    const hour = date.getHours(); const minute = date.getMinutes()
    const mid = (hour >= 12) ? 'PM' : 'AM'

    if ( localStorage.getItem('hour-format') == '24' ) {
        if ( !dispMid.hasClass('no-show') ) dispMid.addClass('no-show')
        if ( hour < 10 ) dispHr.text('0' + hour); else dispHr.text(hour)
    } else {
        if ( dispMid.hasClass('no-show') ) dispMid.removeClass('no-show')
        dispHr.text(hour % 12); dispMid.text(mid)
    }

    if ( minute < 10 ) dispMin.text('0' + minute); else dispMin.text(minute)

}