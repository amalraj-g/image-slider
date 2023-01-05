    let count = -1;
    let slides = document.querySelectorAll(".showSlide");  
    
nextSlide();
prevSlide();

function nextSlide(){
    count=count+1;
    if(count<=slides.length)
    {
        if(count===slides.length)
        {
            count=0;
        }
        for ( let  i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }
        slides[count].style.display = "block";
        
    }
    
}
function prevSlide(){
    count=count-1;
    if(count<slides.length)
    {
        if(count===-1 || count===-2)
        {
            index=slides.length-1;
            count=index;
        }
        for ( let  i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }
        slides[count].style.display = "block";
        
    }
    
}