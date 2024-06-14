function loadComponent(id,comp){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
       if(xhr.readyState===XMLHttpRequest.DONE){
           if(xhr.status===200){
               document.getElementById(id).innerHTML = xhr.responseText
           }
           else{
               console.error("gagal memuat navbar")
           }
       }
    };
    xhr.open('GET',comp,true);
    xhr.send()
   }
   
   loadComponent("navbarContainer","navbar.html")
   loadComponent("footerContainer","footer.html")

   soapModal = document.getElementById("soapModal")
//    soapModal.onclick = function(){
    
//    }



const soapProduct = [
    {
        picture : 'agarwood.png',
        title : 'Agarwood Soap',
        price : 42.000,
    },
    {
        picture : 'autumn.png',
        title : 'Autumn Soap',
        price : 58.000,
    },
    {
        picture : 'cedarwood.png',
        title : 'Cedarwood Soap',
        price : 42.000,
    },
    {
        picture : 'chamomile.png',
        title : 'Chamomile Soap',
        price : 42.000,
    },
    {
        picture : 'eucalyptus.png',
        title : 'Eucalyptus Soap',
        price : 42.000,
    },
    {
        picture : 'lemongrass.png',
        title : 'Lemongrass Soap',
        price : 42.000,
    },
    {
        picture : 'sandalwood.png',
        title : 'Sandalwood Soap',
        price : 42.000,
    },
    {
        picture : 'winter.png',
        title : 'Winter Soap',
        price : 58.000,
    },
]


productList = document.getElementById('productList')

for(i=0;i<soapProduct.length;i++){
    
    let card = document.createElement("div")
    card.style.width = "300px"
    card.className ='border border-3 border-secondary-subtle m-1 mb-4 p-3 rounded justify-content-center align-items-center'

    let cardImage = document.createElement('img')
    cardImage.src = `/assets/pictures/productPicture/${soapProduct[i].picture}`
    cardImage.className = 'col card-img-top'

    let cardTitle = document.createElement("h4")
    cardTitle.className ="col card-title fw-bold fs-4 "
    cardTitle.innerHTML = soapProduct[i].title 

    let cardPrice = document.createElement("h5")
    cardPrice.className ="card-text display-5"

    let cardButton = document.createElement('button')
    cardButton.className ='btn btn-outline-success'
    let cardA = document.createElement('a')
    cardA.innerHTML = 'See details'

    productList.appendChild(card)
    card.appendChild(cardImage)
    card.appendChild(cardTitle)
    card.appendChild(cardPrice)
    card.appendChild(cardButton)
    cardButton.appendChild(cardA)
}