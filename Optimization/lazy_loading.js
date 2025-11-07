// Lazy Loading with Intersection Observer 

let imgs = document.querySelectorAll("img");

let Observer = new IntersectionObserver( function(entries , Observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            Observer.unobserve(img);

        }
    })
} ,{
    root: null ,
    threshold: 0.2           // show img when it come 20% inside root 
})




imgs.forEach(function(img){
    Observer.observe(img);
})
