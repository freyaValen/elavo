const CollectionsProduct = [
    {
        title : 'Special SUMMER Collection',
        picture : 'summer.png',
        product : 'Watermelon Soap',
        desc : 'Rejuvenate your sun-kissed skin with Watermelon Soap. Infused with soothing botanicals. rich in vitamin C, A, and B6 which can hydrates and revitalizes after a long day in the sun, leaving you feeling refreshed and ready for the next adventure. Perfect for maintaining your summer glow!',
    },
    {
        title : 'Fall Collection',
        picture : 'autumn.png',
        product : 'Golden Hour Soap',
        desc : 'Refresh your skin with Golden Hour Soap. Infused with cardamom, amber, and balsam fir, its warm, spicy, and slightly sweet aroma captures the essence of fall. This soothing, handcrafted blend deeply nourishes after a crisp day outdoors, leaving your skin radiant and your senses enchanted. Perfect for embracing the cozy spirit of autumn!',
    },
    {
        title : 'Winter Collection',
        picture : 'winter.png',
        product : 'Snowflakes Soap',
        desc : 'Nourish and protect your skin from the harsh winter chill with Snowflakes Soap. Formulated with a rich blend of lavender, musk, pine, fir, and vanilla, this soap deeply moisturizes dry, cold-weather skin. The warm, comforting scents of pine, fir, cinnamon, and vanilla envelop your senses, leaving your skin soft, nourished, and glowing all season long!'
    }

]


let Collection = document.getElementById('CollectionsContainer')

// SPECIAL SEASON 
let specialSection = document.getElementById("specialSection")

let specialImg = document.createElement('img')
specialImg.className = 'ms-5 m-5'
specialImg.src = `assets/pictures/productPicture/${CollectionsProduct[0].picture}`

let specialTitle = document.createElement('h1')
specialTitle.className = 'display-1 fw-semibold m-5'
specialTitle.innerHTML = CollectionsProduct[0].title

let specialProduct = document.createElement('h2')
specialProduct.className = 'display-3 fw-medium '
specialProduct.innerHTML = CollectionsProduct[0].product

let specialDesc = document.createElement('p')
specialDesc.className = 'fs-3 text-dark-subtle'
specialDesc.innerHTML = CollectionsProduct[0].desc

specialSection.appendChild(specialImg)
specialSection.appendChild(specialTitle)
specialSection.appendChild(specialProduct)
specialSection.appendChild(specialDesc)


// SEASON COLLECTIONS

for(let i = 1;i<CollectionsProduct.length;i++){
    let image = document.createElement('img')
    image.className = 'm-5'
    image.src = `assets/pictures/productPicture/${CollectionsProduct[i].picture}`

    let title = document.createElement('h1')
    title.className = 'display-1 fw-semibold m-5 pt-5'
    title.innerHTML =CollectionsProduct[i].title

    let product = document.createElement('h2')
    product.className = 'display-3 fw-medium '
    product.innerHTML = CollectionsProduct[i].product

    let desc = document.createElement('p')
    desc.className = 'fs-3 text-dark-subtle'
    desc.innerHTML = CollectionsProduct[i].desc
    
    let divAdd = document.createElement('div')
    divAdd.style.height = '200px'

    Collection.appendChild(image)
    Collection.appendChild(title)
    Collection.appendChild(product)
    Collection.appendChild(desc)
    Collection.appendChild(divAdd)

}
