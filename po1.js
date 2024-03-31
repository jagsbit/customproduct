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
 
let card=document.querySelector(".card>img");
let love=document.querySelector("i");
let likes=document.querySelector(".likesCount");
let likeCount=0;
card.addEventListener('dblclick',()=>{
    if(likeCount===0){
        let like=parseInt(likes.textContent);
        likes.textContent=`${like+1}`;
        console.log("liked");
        likeCount=1;
    }
    
    love.style.visibility="visible";
    setTimeout(()=>{
        love.style.visibility="hidden";

    },800)

})
