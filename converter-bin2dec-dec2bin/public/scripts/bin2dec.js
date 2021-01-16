//binary to decimal
function bin2dec(value) {

    dec = 0
    for(let i = value.length - 1, counter = 0; i >= 0; i--, counter++) {
        dec = dec + ((Math.pow(2, counter)) * value[i])
    }

    return dec
}

function limiterBinary(value) {

    for(let i = 0; i < value.length; i++) {
        if(value[i] != '0' && value[i] != '1') {
            alert('Please, enter with a binary number')
            decimalInput.value = 0
        }
        
    }

}

const convertBtn = document.getElementById('convertBtn')


convertBtn.addEventListener('click', ()=> {
    var binaryInput = document.getElementById('binaryInput').value
    var decimalInput = document.getElementById('decimalInput')

    decimalInput.value = bin2dec(binaryInput)
    limiterBinary(binaryInput)
})