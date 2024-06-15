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
    card.style.height =
    card.className ='border border-bottom-2 border-start-2 border-end-2 m-5 mb-4 p-0'

    let cardImage = document.createElement('img')
    cardImage.src = `/assets/pictures/productPicture/${soapProduct[i].picture}`
    cardImage.className = 'col card-img-top'

    let cardBody = document.createElement('div')
    cardBody.className = 'd-flex justify-content-center'

    let cardTitle = document.createElement("h4")
    cardTitle.className ="col card-title fw-bold fs-4 "
    cardTitle.innerHTML = soapProduct[i].title 

    let cardPrice = document.createElement("h5")
    cardPrice.className ="card-text display-5"

    let cardButton = document.createElement('button')
    cardButton.className ='btn'
    let cardA = document.createElement('a')
    cardA.innerHTML = 'See details'
    cardA.className ='fw-semibold text-success '

    productList.appendChild(card)
    card.appendChild(cardImage)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardButton)
    cardButton.appendChild(cardA)
}