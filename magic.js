let file = document.getElementById("myfile");
let columns= document.querySelectorAll(".column");
let arryImg=[];
// event handle on input type
file.onchange=()=>{
//gtfiles from the directory
for (const key in file.files) {
    if (file.files.hasOwnProperty(key)){
        const element = file.files[key];
        
        //get image name
        if(element.type==="image/jpeg" || element.type==="image/png"){
    
            let parentColumn = minParent(columns);
            let imageTag = createImg(element.webkitRelativePath);
            arryImg[key] =imageTag; 
            parentColumn.appendChild(imageTag);
        }
    }
    //animate images
    let i= 0;
    let clearTime=setInterval(()=>{
        arryImg[i].setAttribute("style","display:initial");
        arryImg[i].classList.add("animate","zoomIn");
        i++;
        i==arryImg.length? clearInterval(clearTime):undefined;

    },200);
}

}

//obtain parentnode with min child node
 function minParent(parentNode){
     let arry=[];
     parentNode.forEach((element,i)=>{
         arry[i]=element.children.length;
       
     })
     let min = Math.min.apply(null,arry);
      for (let i = 0; i < parentNode.length; i++) {
          if(parentNode[i].children.length==min){
              return parentNode[i];
          }
          
      }

     }
   function createImg(image){
 const img = document.createElement('img');
    img.setAttribute('src',image);
    img.className='img';
    return img;

   }  
     
 