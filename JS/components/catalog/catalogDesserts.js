
import getAPI from "./getAPI.js";
function generateDesserts() {
    const catalog = document.querySelector(".desserts");
    let HTML="";
getAPI("../../../assets/data/product catalog/desserts.json")
    .then(res=>{
        res.forEach(element => {
            if(element.isActive) {
                HTML+=`
                <div class="catalog-item">
                <img src="${element.imageURL}" alt="">
                <h3>${element.productName}${element.isSpicy ?" 🌶️":""}</h3>
                <p> ${element.description}</p>
                <div class="item-card-bottom">
                  <span>from ${element.price}€</span>
                  <div class="add-to-basket-button">Pasirinkti</div>
                </div>
                </div>
                `
            }
           
            catalog.innerHTML=HTML;
        });
      
        console.log(res)
    })
        .catch(err=>{
            console.error("Gor error while fetching data" + err);
        })
}


export default generateDesserts;
