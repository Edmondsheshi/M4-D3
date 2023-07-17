const apiUrl = `https://api.pexels.com/v1/search?query=[people]`
const apiKey = "GMEZTbf5VpV0LHVrYlp57l0t2habVSysKws1dibQ9VPLGeL4nUSaGwXZ"
let risultato = null

function fetchData() {
    fetch(apiUrl , {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
    risultato = data;
    console.log(risultato)

        //sotituzione img:

        const main = document.querySelector('main')
        const svgs = main.querySelectorAll('svg')
        svgs.forEach(svg => {
            let img = document.createElement('img')
            svg.parentNode.replaceChild( img, svg )
        })

})
}


//inserisci immagine
let imgs = document.querySelectorAll('img')
ImageBitmapRenderingContext.forEach(img, i) => {
    img.set
}


function insertImg(){
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img, i) => {
        img.setAttribute('src', risultato.photos[i].src.potrait)
    })
    let smalls = document.querySelectorAll('small')
    smalls.forEach((small, i) => {
        small.innerHTML = risultato.photos[i].id
    })
}





//pulsante sparisci e compari in caricamento pagina

function changeBtnHide(){
    let editBtn = document.querySelectorAll('.btn-outline-secondary:nth-of-type(2)')
    editBtn.forEach((Elem) => {
        Elem.innerHTML = `hide` 
        Elem.addEventListener('click', function(e){
            let card = e.target.parentNode.parentNode.parentNode.parentNode
            card.remove()
        })
    })
}

window.onload = fuction() {
    changeBtnHide()
    addInput()
}

//aggiungi un input nel jumbo

let kword = 'city'
const apiUrl3 = `https://api.pexels.com/v1/search?query=$[kword]`

function addInput() {
    let jumbotron =  document.getElementById('#jumbo')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'inserisci la keyword')
    input.setAttribute('value', 'text')
    input.setAttribute('name', 'my-input')
    input.setAttribute('id', 'input-key')
    jumbotron.appendChild(input)

}

//oppure

// const input = Object.assign(document.createElement('input'), {
//     type: 'text',
//     name: 'my-input',
//     placeholder: 'Inserisci il testo qui',
//     required: true
// })


function insertImg() {
    let imgs = document.querySelectorAll('.card img')
}



