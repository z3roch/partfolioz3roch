const items=document.querySelectorAll('.section,.contact,.project-card');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.08});items.forEach(item=>{item.classList.add('reveal');observer.observe(item)})}
const switcher=document.getElementById('langSwitch');
let language='uk';
switcher.addEventListener('click',()=>{
  language=language==='uk'?'en':'uk';
  document.documentElement.lang=language;
  document.querySelectorAll('[data-uk][data-en]').forEach(el=>{
    el.innerHTML=el.dataset[language];
  });
  switcher.textContent=language==='uk'?'EN':'UA';
});
