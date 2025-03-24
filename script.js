const navItems = document.getElementById('list_items');
function toggleItems(){
    navItems.classList.toggle('hidden');
}

const navBer = document.getElementById('navBer')
function navScroll(){
    if(window.scrollY>50){
        navBer.classList.add('shadow-md')
    }else{
        navBer.classList.remove('shadow-md')
    }
}
window.addEventListener("scroll", navScroll);