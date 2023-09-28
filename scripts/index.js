const socket=io()

const loadProducts=()=>{
    fetch('/realtimeproducts')
        .then(data=>{
            return data.json()
        })
        .then(products=>{

            let ul=''
            products.forEach(product=>{
                ul+=`<li>${product.title}</li>` 
            })

            let ulProduct=document.getElementById('products')
            ulProduct.innerHTML=ul

        })
}

loadProducts()