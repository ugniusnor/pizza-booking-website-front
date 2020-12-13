

async function popUp () {

    const getAll = ()=> {
        if(document.querySelectorAll(".catalog-item > img").length>0) {
            return console.log("yes");
            
        }

    }

getAll();
}


export default popUp;