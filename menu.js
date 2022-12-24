const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('menu');
const homeLinkElement = document.getElementById('menu_home')
const latestWorkLinkElement = document.getElementById('menu_latest_work')
const photoGalleryLinkElement = document.getElementById('menu_photo_gallery')
const aboutMeLinkElement = document.getElementById('menu_about_me')
const contactMeLinkElement = document.getElementById('menu_contact_me')

toggleMenuElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

homeLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

latestWorkLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

photoGalleryLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

aboutMeLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

contactMeLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});