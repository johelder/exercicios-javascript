const changeBtn = document.getElementById('changeBtn')
const dec2binSection = document.querySelector('.dec2bin-container')
const bin2decSection = document.querySelector('.bin2dec-container')

changeBtn.addEventListener('click', ()=> {
    
    if(dec2binSection.classList.contains('off')) {
        dec2binSection.classList.remove('off')
        bin2decSection.classList.add('off')
    }
    else if(bin2decSection.classList.contains('off')) {
        bin2decSection.classList.remove('off')
        dec2binSection.classList.add('off')
    }
})