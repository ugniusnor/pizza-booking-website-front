
import getAPI from "./getAPI.js";



class Catalog  {
    constructor() {
this.init=this.generateCatalog();
this.isLoaded=false;

            }   


       async generateCatalog() {
            await this.generatePizza();
            await this. generateSnacks();
            await this.generateDesserts();
            await this.generateDrinks();
            this.isLoaded=true;
         
           
        }
        
        generatePizza() {
            const catalog = document.querySelector(".pizza");
            let HTML="";
        getAPI("../../../assets/data/product catalog/pizaa.json")
            .then(res=>{
                res.forEach(element => {
                    if(element.isActive) {
                        HTML+=`
                        <div class="catalog-item">
                        <img class="item-picture" src="${element.imageURL}" alt="">
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
               this.popUp(".pizza > .catalog-item");
                
            })
                .catch(err=>{
                    console.error("Gor error while fetching data" + err);
                })
        }

        generateSnacks() {
            const catalog = document.querySelector(".snacks");
            let HTML="";
        getAPI("../../../assets/data/product catalog/snacks.json")
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
                this.popUp(".snacks > .catalog-item");
            })
                .catch(err=>{
                    console.error("Gor error while fetching data" + err);
                })
        }
        generateDesserts() {
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
                this.popUp(".desserts > .catalog-item");
            })
                .catch(err=>{
                    console.error("Gor error while fetching data" + err);
                })
        }
        generateDrinks() {
            const catalog = document.querySelector(".drinks");
            let HTML="";
        getAPI("../../../assets/data/product catalog/drinks.json")
            .then(res=>{
                res.forEach(element => {
                    if(element.isActive) {
                        HTML+=`
                        <div class="catalog-item">
                        <img src="${element.imageURL}" alt="">
                        <h3>${element.productName}</h3>
                        <p> ${element.quantity}</p>
                        <div class="item-card-bottom">
                          <span>from ${element.price}€</span>
                          <div class="add-to-basket-button">Pasirinkti</div>
                        </div>
                        </div>
                        `
                    }
                   
                    catalog.innerHTML=HTML;
                   
                });
                
                this.popUp(".drinks > .catalog-item");
            })
                .catch(err=>{
                    console.error("Gor error while fetching data" + err);
                })
        }

        popUp(element) {
        const elements = document.querySelectorAll(element);
        elements.forEach(element => {
            element.addEventListener("click",()=> {
                console.log("labas")
            })
        });
        }
      
}

export default Catalog;