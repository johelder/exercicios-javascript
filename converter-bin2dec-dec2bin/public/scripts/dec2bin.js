//decimal to binary
function dec2bin(value) {

    bin = []

    while(value >= 1) {
        bin.push(value % 2)
        value = value / 2
        value = Math.floor(value)
    }

    return bin.reverse().join('')
}

convertBtn.addEventListener('click', ()=> {
    var inputDecimal = document.getElementById('inputDecimal').value
    var inputBinary = document.getElementById('inputBinary')

    inputBinary.value = dec2bin(inputDecimal)
})
