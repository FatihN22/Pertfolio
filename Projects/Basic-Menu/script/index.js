const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".tab");
const all = document.getElementById('all');
const block = document.getElementById('cold');
const fixed = document.getElementById('fixed')
const back = document.getElementById('top')

window.onload = block.style.display = 'block';

window.onscroll = function(){scrollFunction()};
back.addEventListener('click', (e) => {;
   window.scrollTo({top:0, behavior:"smooth"})
})
function scrollFunction(){
  if(window.pageYOffset > 503){
    back.style.display = 'block'
  }else{
    back.style.display = 'none'
  }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetCard = document.querySelector(`#${button.dataset.target}`);
      
      items.forEach((item) => {
        if (item === targetCard) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      buttons.forEach((button) =>{
        if(button === event.target){
            button.classList.add("active")
        }else{
            button.classList.remove ("active");
        }
      })
    });
  });