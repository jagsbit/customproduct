cartBtn=document.querySelector(".cart-btn");
let cardbox=document.querySelector(".card");
let tost=document.querySelector(".tost");
let flag =0;
//add cart funtion
cartBtn.addEventListener('click',()=>{
    if(flag===0) {
        tost.style.visibility="visible"
        tost.textContent="Item Added"
       cartBtn.textContent="Remove"
       cartBtn.style.backgroundColor='greenyellow';
      
       setTimeout(()=>{
          tost.style.visibility="hidden"
       },1000);
       flag=1;
    }
    else{
        tost.style.visibility="visible"
        tost.textContent="Item Removed"
       cartBtn.textContent="Add to Cart"
       cartBtn.style.backgroundColor='green';
        
       setTimeout(()=>{
          tost.style.visibility="hidden"
       },1000);
       flag=0;

    }
   
})
//like function
let like=0;
let card=document.querySelector(".card>img");
let love=document.querySelector("i");
let likes=document.querySelector(".likes")
card.addEventListener('dblclick',()=>{
    like++;
    likes.textContent=`Likes : ${like}`;
    console.log("liked");
    love.style.visibility="visible";
    setTimeout(()=>{
        love.style.visibility="hidden";

    },800)

})