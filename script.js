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
        picture : 'summer.png',
        title : 'Watermelon Soap',
        price : `Rp${58000}`,
        desc : 'Rejuvenate your sun-kissed skin with Watermelon Soap. Infused with soothing botanicals. rich in vitamin C, A, and B6 which can hydrates and revitalizes after a long day in the sun, leaving you feeling refreshed and ready for the next adventure. Perfect for maintaining your summer glow!'
    },
    {
        picture : 'winter.png',
        title : 'Snowflakes Soap',
        price : `Rp${58000}`,
        desc : 'Nourish and protect your skin from the harsh winter chill with Snowflakes Soap. Formulated with a rich blend of lavender, musk, pine, fir, and vanilla, this soap deeply moisturizes dry, cold-weather skin. The warm, comforting scents of pine, fir, cinnamon, and vanilla envelop your senses, leaving your skin soft, nourished, and glowing all season long!'
    },
    {
        picture : 'autumn.png',
        title : 'Golden Hour Soap',
        price : `Rp${58000}`,
        desc : 'Refresh your skin with Golden Hour Soap. Infused with cardamom, amber, and balsam fir, its warm, spicy, and slightly sweet aroma captures the essence of fall. This soothing, handcrafted blend deeply nourishes after a crisp day outdoors, leaving your skin radiant and your senses enchanted. Perfect for embracing the cozy spirit of autumn!'
    },
    {
        picture : 'agarwood.png',
        title : 'Agarwood Soap',
        price : `Rp${42000}`,
        desc : `Rejuvenate your skin with Agarwood Soap. Infused with naturally soothing botanicals, it helps fade scars, wrinkles, and acne while being safe for conditions like psoriasis and eczema. Enriched with a subtly sweet and woody aroma, this soap refreshes and revitalizes your skin, leaving it smooth and ready for your next adventure. Perfect for maintaining a flawless glow!`
    },
    
    {
        picture : 'cedarwood.png',
        title : 'Cedarwood Soap',
        price : `Rp${42000}`,
        desc : 'Refresh your skin with Cedarwood Soap. Harnessing the power of anti-inflammatory, anti-fungal, and anti-bacterial properties, this soap effectively treats irritated skin and clears back and chest acne. Enjoy its cooling and relaxing effect, leaving your skin calm and rejuvenated, ready for your next adventure. Perfect for maintaining a smooth, radiant complexion!'
    },
    {
        picture : 'chamomile.png',
        title : 'Chamomile Soap',
        price : `Rp${42000}`,
        desc : 'Revitalize your skin with Chamomile Soap. Rich in potent anti-inflammatory and antioxidant properties, it helps fade scars, reduce swelling, and diminish redness. Enjoy its sweet, fresh scent with a hint of herbal notes, leaving your skin soothed and radiant, ready for your next adventure. Perfect for nurturing a balanced and glowing complexion!'
    },
    {
        picture : 'eucalyptus.png',
        title : 'Eucalyptus Soap',
        price : `Rp${42000}`,
        desc : "Invigorate your skin with Eucalyptus Soap. Crafted to enhance your skin's natural moisture barrier, it leaves your skin feeling hydrated and resilient. With refreshing minty, honey, and citrus scents, this soap revitalizes your senses and prepares you for your next adventure. Perfect for maintaining a balanced and refreshed complexion!"
    },
    {
        picture : 'lemongrass.png',
        title : 'Lemongrass Soap',
        price : `Rp${42000}`,
        desc : "Brighten your skin with Lemongrass Soap. Formulated to lighten skin, reduce discolorations, and strengthen your skin's natural barrier, it promotes a healthier, more radiant complexion. With invigorating fresh lemon and earthy scents, this soap refreshes and energizes, leaving you ready for your next adventure. Perfect for achieving a luminous, even-toned glow!"
    },
    {
        picture : 'sandalwood.png',
        title : 'Sandalwood Soap',
        price : `Rp${42000}`,
        desc : "Nourish your skin with Sandalwood Soap. Enriched with potent antioxidants, it helps prevent wrinkles, reduce dryness, and replenish your skin's moisture. With a captivating blend of woody, spicy, and sweet scents, this soap leaves your skin smooth and rejuvenated, ready for your next adventure. Perfect for achieving a hydrated, youthful glow!"
    },
]


productList = document.getElementById('productList')
let productModal = document.getElementById('productModal')
let PmodalTitle = document.getElementById('PmodalTitle')
let PmodalImage = document.getElementById('PmodalImage')
let PcloseModal = document.getElementById('PcloseModal')
let PAddCart = document.getElementById('PAddCart')
let selectedSoap= ''

for(i=0;i<soapProduct.length;i++){
    
    let card = document.createElement("div")
    card.style.width = "300px"
    card.style.height = "430px"
    card.className ='card border border-bottom-2 border-start-2 border-end-2 m-5 mb-4 p-0'

    let cardImage = document.createElement('img')
    cardImage.src = `/assets/pictures/productPicture/${soapProduct[i].picture}`
    cardImage.style.height = "300px"
    cardImage.className = 'col card-img-top'

    let cardBody = document.createElement('div')
    cardBody.className = 'p-2'

    let cardTitle = document.createElement("h4")
    cardTitle.className ="col card-title fw-bold fs-4 "
    cardTitle.innerHTML = soapProduct[i].title 

    let cardPrice = document.createElement("h5")
    cardPrice.className ="card-text text-dark-emphasis fs-6"
    cardPrice.innerHTML = soapProduct[i].price

    let cardButton = document.createElement('button')
    cardButton.className ='btn btn-sm bg-success-subtle rounded-0'
    cardButton.style.width = "100%"

    let cardA = document.createElement('a')
    cardA.innerHTML = 'See details'
    cardA.className ='fw-semibold text-dark link-underline link-underline-opacity-0'
    // PmodalText.innerHTML = `${soapProduct[i].desc}<br><br>${cardPrice.innerHTML}`

    productList.appendChild(card)
    card.appendChild(cardImage)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardButton)
    cardButton.appendChild(cardA)
    // PmodalText.innerHTML = `${soapProduct[i].desc}<br><br>${soapProduct[i].price}`
    let PmodalText = document.getElementById('PmodalText')
    let modalDesc = `${soapProduct[i].desc}<br><br>${cardPrice.innerHTML}`

    cardButton.onclick = function(){
        PmodalTitle.innerHTML = cardTitle.innerHTML
        PmodalImage.src = cardImage.src
        PmodalText.innerHTML = modalDesc
        selectedSoap = cardTitle.innerHTML
        productModal.style.display = 'block'

    }

    PcloseModal.onclick =function(){
        productModal.style.display='none'
    }

    window.onclick = function(event) {
        if (event.target == productModal) {
            productModal.style.display = "none";
        }
        }
    }
    
    PAddCart.addEventListener('click',AddtoCart)
    
    function AddtoCart(){
        saveProduct(selectedSoap)
        productModal.style.display = 'none'
    }
    
    function saveProduct(value){
        localStorage.setItem(`product${localStorage.length}`,value)
    }
