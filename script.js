

function insert(num) {
    let result = document.querySelector('.result')
    let resultAfter = result.value
    result.value = resultAfter + num
}

function back(){
    let result = document.querySelector('.result')
    let resultAfter = result.value.split('')
    resultAfter.pop()
    result.value = resultAfter.join('')
}

function reset(){
    let result = document.querySelector('.result')
    result.value = ""
}

function igual(){
    let result = document.querySelector('.result')
    result.value = eval(result.value)
}

const $html = document.querySelector('html')
const $range = document.querySelector('.range')

$range.addEventListener('change', () => {
    if($range.value == 1){
        $html.classList.remove('green-mode')
        $html.classList.remove('dark-mode')
        $html.classList.remove('red-mode')
        $html.classList.add('blue-mode')
    }
    if($range.value == 2){
        $html.classList.remove('green-mode')
        $html.classList.remove('dark-mode')
        $html.classList.remove('blue-mode')
        $html.classList.add('red-mode')
    }
    if($range.value == 3){
        $html.classList.remove('green-mode')
        $html.classList.remove('blue-mode')
        $html.classList.remove('red-mode')
        $html.classList.add('dark-mode')
    }
    if($range.value == 4){
        $html.classList.remove('blue-mode')
        $html.classList.remove('dark-mode')
        $html.classList.remove('red-mode')
        $html.classList.add('green-mode')
    }
})