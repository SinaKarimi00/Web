$(function(){
    let menue = $('#navChild')
    menue.hide()
    $('#more').click(function(){
        menue.slideToggle()
    })
    $('#close').click(function(){
        menue.slideUp()
    })
})
