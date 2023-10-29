

const progressbar = document.querySelector('.progressbar')
const cirles = document.querySelectorAll('.cirles')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let cirLen = cirles.length

let current = 1
next.addEventListener('click',()=>{
    

    current++
    if(current > cirLen ){
        current = cirLen
    }

    updateCurrent()


    
})
prev.addEventListener('click',()=>{
    current--
    if(current  < 1){
        current = 1
    }
    updateCurrent();
})

function updateCurrent(){

    cirles.forEach((cirlceClass,index)=>{
        if(index < current){
            cirlceClass.classList.add('active')
        }else{
            cirlceClass.classList.remove('active')

        }
    })

    let active = document.querySelectorAll('.active')

    progressbar.style.width = (active.length -1) / (cirLen-1) * 100 + '%';

    if(current == 1){
        prev.disable = true
    }else if(current == cirLen){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

}