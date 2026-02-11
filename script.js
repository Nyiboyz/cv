const sections=document.querySelectorAll('.section');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show')}});
},{threshold:0.2});
sections.forEach(s=>observer.observe(s));
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

