const apiURL = 'https://fakestoreapi.com/products';

fetch(apiURL).then((res) => {
    console.log(res)
    return res.json();
}).then((objectJson) => {
    let data="";
    objectJson.map((value) => {
        data += 
        `<div class="items">
            <h1 class="title">${value.title}</h1>
            <img src=${value.image} alt="/" class="images">
            <p>${value.description}</p>
            <p class="category">${value.category}</p>
            <p class="price">${value.price}</p>
        </div>`
    });
    document.getElementById("container").innerHTML= data;
}).catch((err) => {
    console.log(err);
})