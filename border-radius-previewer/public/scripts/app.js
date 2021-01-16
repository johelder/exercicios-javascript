const box = document.querySelector('.box')
const cssCopy = document.querySelector('.cssCopy input')
const cssCopyBtn = document.querySelector('.cssCopy a')
const top_left = document.querySelector('.top-left input')
const top_right = document.querySelector('.top-right input')
const bottom_left = document.querySelector('.bottom-left input')
const bottom_right = document.querySelector('.bottom-right input')

var valueTopLeft = 0
var valueTopRight = 0
var valueBottomLeft = 0
var valueBottomRight = 0

top_left.addEventListener('input', ()=> {

    box.style.borderTopLeftRadius = top_left.value + 'px'
    valueTopLeft = top_left.value
    cssCopy.value = 'border-radius: ' + valueTopLeft + '%' + ' ' + valueTopRight + '%' + ' ' + valueBottomLeft + '%' + ' ' + valueBottomRight + '%'
})

top_right.addEventListener('input', ()=> {

    box.style.borderTopRightRadius = top_right.value + 'px'
    valueTopRight = top_right.value
    cssCopy.value = 'border-radius: ' + valueTopLeft + '%' + ' ' + valueTopRight + '%' + ' ' + valueBottomLeft + '%' + ' ' + valueBottomRight + '%'
})

bottom_left.addEventListener('input', ()=> {

    box.style.borderBottomLeftRadius = bottom_left.value + 'px'
    valueBottomLeft = bottom_left.value
    cssCopy.value = 'border-radius: ' + valueTopLeft + '%' + ' ' + valueTopRight + '%' + ' ' + valueBottomLeft + '%' + ' ' + valueBottomRight + '%'
})

bottom_right.addEventListener('input', ()=> {

    box.style.borderBottomRightRadius = bottom_right.value + 'px'
    valueBottomRight = bottom_right.value
    cssCopy.value = 'border-radius: ' + valueTopLeft + '%' + ' ' + valueTopRight + '%' + ' ' + valueBottomLeft + '%' + ' ' + valueBottomRight + '%'
})

cssCopyBtn.addEventListener('click', ()=> {

    cssCopy.select()
    cssCopy.setSelectionRange(0, 99999)
    document.execCommand('copy')
})

