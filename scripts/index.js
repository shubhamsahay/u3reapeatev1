//store the products array in localstorage as "products"
pro=JSON.parse(localStorage.getItem("products"))||[];
console.log(pro);

function puma(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}

function my(e){
    e.preventDefault();
    let form= document.querySelector("form");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let p1=new puma(type,desc,price,image);
    pro.push(p1);
    localStorage.setItem("products",JSON.stringify(pro));
}
document.querySelector("#show_products").addEventListener("click",my1);
function my1(){
    window.location.href="./inventory.html";
}
