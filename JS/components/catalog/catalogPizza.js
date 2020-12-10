
// async function run() {
//     try {
//         // making request to server and getting response object
//         const res = await fetch("../../../assets/data/Pizza catalog/pizaa.json", {
//             // headers: {
//             //     "Content-Type": "application/json;charset=UTF-8"
//             // }
//         });

//         // checking if we managed to get valid response
//         if (!res.ok) {
//             console.error("Failed to fetch: ", res.status);
//             return;
//         }

//         try {
//             // parsing response body
//             const data = await res.json();
//             // printing response
//             console.log(data);
//         } catch (err) {
//             console.error("Got invalid JSON");
//         }
//     } catch (err) {
//         console.error("Failed to connect: ", err);
//     }
// }


// export default run;
import getAPI from "./getAPI.js";
function generatePizza() {
    const catalog = document.querySelector(".pizza-catalog");
    let HTML="";
getAPI("../../../assets/data/Pizza catalog/pizaa.json")
    .then(res=>{
        res.forEach(element => {
            HTML+=`
            <div class="catalog-item">
            <img src="${element.imageURL}" alt="">
            <h3>${element.productName}</h3>
            <p ${element.isSpicy && 'class="spicy"'}>${element.description}</p>
            <div class="item-card-bottom">
              <span>from ${element.price}$</span>
              <div class="add-to-basket-button">Pasirinkti</div>
            </div>
            </div>
            `
            catalog.innerHTML=HTML;
        });
      
        console.log(res)
    })
        .catch(err=>{
            console.error("Gor error while fetching data" + err);
        })
}


export default generatePizza;