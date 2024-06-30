const soapList = [
    {
        picture : 'winter.png',
        title : 'Snowflakes Soap',
        price : 58000,
        num : 0
    },
    {
        picture : 'summer.png',
        title : 'Watermelon Soap',
        price : 58000,
        num : 0
    },
    {
        picture : 'autumn.png',
        title : 'Golden Hour Soap',
        price : 58000,
        num : 0
    },
    {
        picture : 'agarwood.png',
        title : 'Agarwood Soap',
        price : 42000,
        num : 0
    },
    
    {
        picture : 'cedarwood.png',
        title : 'Cedarwood Soap',
        price : 42000,
        num : 0
    },
    {
        picture : 'chamomile.png',
        title : 'Chamomile Soap',
        price : 42000,
        num : 0
    },
    {
        picture : 'eucalyptus.png',
        title : 'Eucalyptus Soap',
        price : 42000,
        num : 0
    },
    {
        picture : 'lemongrass.png',
        title : 'Lemongrass Soap',
        price : 42000,
        num : 0
    },
    {
        picture : 'sandalwood.png',
        title : 'Sandalwood Soap',
        price : 42000,
        num : 0
    },
]

let addedProduct = []
let cartList = document.getElementById("cartList")
let eachQuantity = 0

for(i=0;i<localStorage.length;i++){

    let theProduct = localStorage.getItem(`product${i}`)
    addedProduct.push(theProduct)
    
    function checkIndex(y){
        let x = 0
        while(soapList[x].title != y){
            x++
        }
        return x
        }
    
    
    if(addedProduct.includes(theProduct)){
        console.log(soapList[checkIndex(theProduct)].num + theProduct)
    soapList[checkIndex(theProduct)].num += 1
    console.log(soapList[checkIndex(theProduct)].num + 'THAT'+theProduct)
    eachQuantity = soapList[checkIndex(theProduct)].num
    if(document.getElementById(`quantity${theProduct}`)){
        let curList = document.getElementById(`ListItem${theProduct}`)
        // curList.remove()
        let curQuantity = document.getElementById(`quantity${theProduct}`)
        curQuantity.innerHTML = eachQuantity
    }
    }
    else{
        addListItem()
    }
    
    addListItem() 
    function addListItem(){
    let ListItem = document.createElement('li')
    ListItem.className = 'list-group-item row d-flex align-items-center'
    ListItem.id = `ListItem${theProduct}`
    
    let checkBox = document.createElement('input')
    checkBox.className = 'form-check-input display-5 mx-4 border border-secondary border-2'
    checkBox.type = 'checkbox'

    let cartImage = document.createElement('img')
    cartImage.className = 'col-2 my-3'
    cartImage.src = `assets/pictures/productPicture/${soapList[checkIndex(theProduct)].picture}`

    let label = document.createElement('label')
    label.className = 'form-check-label col-3 fw-semibold fs-3 align-self-center'
    label.innerHTML = theProduct
    
    let btnGroup = document.createElement('div')
    btnGroup.className = 'btn-group btn-group-lg col-2 position-absolute end-0 me-5'
    btnGroup.role = 'group'

    let min = document.createElement('button')
    min.className = 'btn btn-outline-success'
    min.innerHTML = '-'

    let quantity = document.createElement('button')
    quantity.className = 'btn btn-success'
    console.log(soapList[checkIndex(theProduct).num] +'why')
    quantity.innerHTML = eachQuantity
    quantity.id = `quantity${theProduct}`

    let plus = document.createElement('button')
    plus.className = 'btn btn-outline-success'
    plus.innerHTML = '+'
    

    cartList.appendChild(ListItem)
    ListItem.appendChild(checkBox)
    ListItem.appendChild(cartImage)
    ListItem.appendChild(label)
    ListItem.appendChild(btnGroup)
    btnGroup.appendChild(min)
    btnGroup.appendChild(quantity)
    btnGroup.appendChild(plus)
    }

}
console.log(addedProduct)