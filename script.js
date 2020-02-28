document.addEventListener('DOMContentLoaded', () => {
    getElements();
})

function getElements() {
    let choose = document.querySelector('.choosing');
    let circles = document.querySelectorAll('.circle-choose');
    let arrows = document.querySelectorAll('.circle-choose__arrow');
    let descr = document.querySelector('.description');
    let tabsItems = document.querySelector('.description__tabs');
    let info = document.querySelectorAll('.info');
    circles.forEach(item => {
        item.addEventListener('click', () => {
            let curName = item.getAttribute('data-name');
            let number = parseInt(item.getAttribute('data-id')); 
            if (arrows[0].offsetParent != null) {
                for (let i = 0; i < arrows.length; i++) {
                    if (i === number - 1) {
                        info[i].classList.toggle('info-show');
                        arrows[i].classList.toggle('circle-choose__arrow-active');
                        if (info[i].classList.contains('info-show')) choose.classList.remove('choosing-show');
                        else choose.classList.add('choosing-show');
                    }
                    else { 
                        info[i].classList.remove('info-show');
                        arrows[i].classList.remove('circle-choose__arrow-active');
                    }
                }
                choose.classList.toggle('choosing-show');
            }
            else {
                descr.scrollIntoView({ behavior: 'smooth' });
                descr.style.animationPlayState = 'running';
                tabsItems.style.animationPlayState = 'running';
                info[info.length - 1].style.animationPlayState = 'running';
                setCircle(curName);
                setTab(curName);
            }
        })
    })
    let tabs = document.querySelectorAll('.description__column');
    tabs.forEach(item => {
        item.addEventListener('click', () => {
            let curName = item.getAttribute('data-name');
            setTab(curName);
            setCircle(curName);
        })
    })
}

function setTab(name) {
    let tabs = document.querySelectorAll('.description__column');
    tabs.forEach(item => {
        if (item.getAttribute('data-name') === name) {
            item.classList.add('description__column-active');
        }
        else {
            item.classList.remove('description__column-active');
        }
    })
}

function setCircle(name) {
    let circles = document.querySelectorAll('.circle-choose');
    circles.forEach(item => {
        if (item.getAttribute('data-name') === name) {
            item.classList.add('circle-choose-active')
        }
        else {
            item.classList.remove('circle-choose-active');
        }
    })
}
