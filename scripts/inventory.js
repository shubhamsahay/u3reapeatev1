let products_details=JSON.parse(localStorage.getItem("products"));

function display(products_details){

    document.querySelector("#all_products").innerHTML="";

    products_details.map(function(el,index){
        let d1=document.createElement("div");
        d1.style.height="180px"
        d1.style.width="280px"
        let im=document.createElement("img");
        im.src=el.image;
        im.style.height="70%";
        im.style.width="100%";
        let t=document.createElement("h4");
        t.innerText=el.type;
        let d=document.createElement("h4");
        d.innerText=el.desc;
        let p=document.createElement("h4");
        p.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.style.width="150px";
        btn.style.height="20px";
        btn.addEventListener("click",function(){
            She(el,index)
        })
        btn.setAttribute("id","remove_product");

        d1.append(im,t,d,p,btn);

        document.querySelector("#all_products").append(d1);

    })
}

display(products_details)

function she(el,index){
    products_details.splice(index,1);
    localStorage.setItem("products",JSON.stringify(products_details));
    display(products_details);
}
document.querySelector("#add_more_product").addEventListener("click",hh);
function hh(){
    window.location.href="index.html";
}