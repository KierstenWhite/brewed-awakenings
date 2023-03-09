import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            
            const [,productId] = itemClicked.id.split("--")
            
            let productPrice = null
            for (const product of products) {
                if (parseInt(productId) === product.id) {
                    productPrice = product                
                }
            }       
                    window.alert(`${productPrice.name} costs ${productPrice.price}`)
            
            }
        }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

