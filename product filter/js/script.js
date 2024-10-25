const buttons=document.querySelectoroAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchBox=document.querySelector("#search");

/* Search product by Textbox */
searchBox.addEventListener('keyup' ,(e)=>{
searchText=e.target.value.toLowerCase().trim();
buttons.classList.remove('btn-clicked');
boxes.forEach((box)=>{
    const data=box.dataset.item;
    if(data.includes(searchText)){
        box.style.display='block';
    }else{
        box.style.display='none';
    }
});
});
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
    });
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classlist.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');


}