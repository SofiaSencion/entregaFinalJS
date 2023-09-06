import {prueba} from "./productos";

const api = 'https://fakestoreapi.com/products' //llamar api

//actualizar productos con categoria ofertas: true

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

console.log(api)


//actualizar productos para ponerlos en oferta


let ofertas = fetch('https://fakestoreapi.com/products/1',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic',
                        sale: true,
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

console.log(ofertas)
console.log(api)

console.log(prueba)