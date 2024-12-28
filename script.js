let array = [

    {
        dp: "https://images.unsplash.com/photo-1734452465230-f571caa4d7d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1733181743510-3af9092af143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
     },

     {
        dp: "https://images.unsplash.com/photo-1719937050792-a6a15d899281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1734012755159-0606af9bc1c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },

     {
        dp: "https://images.unsplash.com/photo-1734387981971-037a15511ef6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1734375063393-2ca2050512cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },

     {
        dp: "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1734378377292-212b58560ff8?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     }
     
]

var list =" ";

var story=document.querySelector(".story-box");
array.forEach((elem,idx)=>{


    list +=` <div class="story">
               <img id="${idx}" src="${elem.dp}">
            </div>`;  
 });

 story.innerHTML=list;
 story.addEventListener("click", (dets)=>{
     
    
    (array[dets.target.id].story);
    document.querySelector(".full").style.display="block"; 
    document.querySelector(".full").style.backgroundImage = `url(${(array[dets.target.id].story)})`;

   

    setTimeout(()=>{
        document.querySelector(".full").style.display="none";
    },3000)

});

const box =document.querySelector(".container");
const love =document.querySelector("#love");
const hrt =document.querySelector("#hrt");
const text =document.querySelector("h2");





box.addEventListener("dblclick", ()=>{

  love.style.opacity="7";
  love.style.fontSize="100px";
  love.style.color=" rgb(230, 0, 130)";
  love.style.animation="rotateFade 1s ease-in-out forwards";
  text.innerHTML="";
  hrt.style.color="red";
  
  
  setTimeout(()=>{
   love.style.opacity="0";
   love.style.animation="none";
   text.innerHTML="Click To View Story";
  },3000);

});


