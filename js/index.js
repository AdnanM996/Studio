function loader(){
    let preloader = document.querySelector('.preloader');

    window.addEventListener('load',() =>{
        preloader.style.display = 'none';
    });
};

function heroText(){
    let heroText = document.querySelectorAll('.hero__text--heading');

    


};


function aboutText(){
    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;
        let about = document.querySelector('.about');
        let aboutText = document.querySelector('.about-text');
        
        if(wScroll > (about.clientHeight / 1.4)) {
            aboutText.classList.add('about-text-visble');
        } else {
            aboutText.classList.remove('about-text-visble');
        }
    });
};

let blackSection = document.querySelector('.black-section');
let footer = document.querySelector('.footer');

function headerLinks(){
    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;
        let header = document.querySelector('.header');
        let headerLinks = header.querySelectorAll('.header a');

        if(wScroll >= blackSection.offsetTop) {
            for(let i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = '#FFF';
                headerLinks[i].style.transition = 'all .3s ease';
            };
        } else {
            for(let i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = '#0a0a0a';
                headerLinks[i].style.transition = 'all .3s ease';
            };
        }

        if(wScroll >= footer.offsetTop) {
            for(let i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = '#0a0a0a';
                headerLinks[i].style.transition = 'all .3s ease';
            };
        } else if(wScroll < blackSection.offsetTop){
            for(let i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = '#0a0a0a';
                headerLinks[i].style.transition = 'all .3s ease';
            };
        }
    });
};

function active() {
    window.addEventListener('scroll', ()=>{
        let wScroll = Math.round(this.pageYOffset);
        let active = document.querySelector('.active');

        if(wScroll >= blackSection.offsetTop) {
            active.style.borderBottom = '2px solid #fff';
        } else {
            active.style.borderBottom = '2px solid #0a0a0a';
        }

        if(wScroll >= footer.offsetTop) {
            active.style.borderBottom = '2px solid #0a0a0a';
        } else if(wScroll < blackSection.offsetTop) {
            active.style.borderBottom = '2px solid #0a0a0a';
        }
       
    });
};

function selectedProjects() {
    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;
        let selectedProjects = document.querySelector('.selectedProjects');
        let selectedProjectsWork = selectedProjects.querySelectorAll('.grid__container');

        if(wScroll > (blackSection.clientHeight / 1.2)){
            for(let i = 0; i < selectedProjectsWork.length; i++) {
                setTimeout(() =>{
                    selectedProjectsWork[i].classList.add('container-visible');
                }, i * 500);
            };
        }
    });
};

function showVideo(){
    let video = document.querySelector('.video');
    let amp = document.querySelector('.hero__text--amp');

    amp.addEventListener('mouseover', () => {
        video.classList.add('visible-video');
    });

    amp.addEventListener('mouseout', () =>{
        video.classList.remove('visible-video');
    });
}

let page = document.body.id;

switch(page){
    case('home'):
        loader();
        heroText();
        showVideo();
        aboutText();
        headerLinks();
        selectedProjects();
        break;
    case('work'):
        loader();
        headerLinks();
        active();
        break;
    case('studio'):
        loader();
        headerLinks();
        active();
        break;
    case('contact'):
        loader();
        break;
}