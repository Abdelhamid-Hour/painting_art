window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const loader_container = document.querySelector('.loader_container');
    const loader_background = document.querySelector('.loader_background');
    loader.classList.add('loader_finish');
    loader_background.classList.add('container_finish');
    setTimeout(() => {
            loader_container.style.zIndex = '-1';
    }, 1000);
    window.onscroll = function(){
    orderScrollAnimation();
    }
window.onresize = function(){
    orderScrollAnimation();
    };
document.body.addEventListener('mousemove', mousemovecatch);
});



// Elements Selection
const back_ground = document.querySelector(".back_ground");
const right_border = document.querySelector('.right_border');
const left_border = document.querySelector('.left_border');
const top_border = document.querySelector('.top_border');
const bottom_border = document.querySelector('.bottom_border');
const canvas = document.querySelector('.canvas');
const shadow_art = document.querySelector('.shadow_art');
const home_start = document.querySelector('.home_start');

// variables

let i = 0;
let j = 0;

// Get border position
function log3DRotation(border, class_name) {
    
    const style = window.getComputedStyle(border);
    const transform = style.transform || style.webkitTransform || style.mozTransform;

    let matrix = transform.match(/^matrix3d\((.+)\)$/);

    if (matrix) {
        matrix = matrix[1].split(', ').map(parseFloat);
        const translateX = matrix[12]; // m41
        const translateY = matrix[13]; // m42
        const translateZ = matrix[14]; // m43
        const rotationX = Math.atan2(matrix[9], matrix[10]) * (180 / Math.PI);
        const rotationY = Math.atan2(-matrix[8], Math.sqrt(matrix[9] * matrix[9] + matrix[10] * matrix[10])) * (180 / Math.PI);
        const rotationZ = Math.atan2(matrix[4], matrix[0]) * (180 / Math.PI);
        requestAnimationFrame(() => {
            border.style.transform = `rotateZ(${rotationZ}deg) rotateY(- ${rotationY}deg)`;
            border.classList.add(`${class_name}`);
            });
    }
}


// order scroll animations

function orderScrollAnimation(){
    if(scrollY == 0){
        right_border.classList.remove('right_a1');
        left_border.classList.remove('left_a1');
        top_border.classList.remove('top_a1');
        bottom_border.classList.remove('bottom_a1');
        i = 0;
    }else if(scrollY > 0 && scrollY < window.innerHeight * 1.2){
        i++;
        canvas.classList.add('canvas_a1');
        shadow_art.classList.add('shadow_a1');
        canvas.classList.remove('canvas_a2');
        shadow_art.classList.remove('shadow_a2');
        if (i == 1) {
        log3DRotation(right_border, 'right_a1');
        log3DRotation(left_border, 'left_a1');
        log3DRotation(top_border, 'top_a1');
        log3DRotation(bottom_border, 'bottom_a1');
        }
        
    }else if (scrollY >= window.innerHeight * 1.2 && scrollY < window.innerHeight * 2) {//+++++++++ 120vh 200
            shadow_art.classList.remove('shadow_a3');
            canvas.classList.remove('canvas_a3');
            canvas.classList.remove('canvas_a1');
            shadow_art.classList.remove('shadow_a1');
            canvas.classList.add('canvas_a2');
            shadow_art.classList.add('shadow_a2');
        }
        else if(scrollY >= window.innerHeight * 2.2 && scrollY < window.innerHeight * 3){
            shadow_art.classList.remove('shadow_a2');
            shadow_art.classList.add('shadow_a3');
            canvas.classList.remove('canvas_a2');
            canvas.classList.add('canvas_a3');
        }
        if(scrollY >= window.innerHeight + 1 && scrollY < window.innerHeight * 1.2 || scrollY >= window.innerHeight * 2 && scrollY < window.innerHeight * 2.2 || scrollY >= window.innerHeight * 3){
            if (scrollY >= window.innerHeight + 1 && scrollY < window.innerHeight * 1.2) {
                canvas.style.transform = 'rotateY(180deg)';
            }else if(scrollY >= window.innerHeight * 2 && scrollY < window.innerHeight * 2.2){
                canvas.style.transform = 'rotateY(360deg)';
            }else {
                canvas.style.transform = 'rotateY(180deg)';
            }
            canvas.classList.add('canvas_flow');
            shadow_art.classList.add('shadow_flow');
        }else{
            canvas.classList.remove('canvas_flow');
            shadow_art.classList.remove('shadow_flow');
        }
        if (scrollY >= window.innerHeight + 1) {
            document.body.removeEventListener('mousemove', mousemovecatch);
            canvas.style.translate = '0';
            right_border.style.cssText = `
            right: calc(50.03% - var(--border-size)*5);
            transform: rotateY(0deg) rotateZ(0deg);
            animation: none;`;
            left_border.style.cssText = `
            left: calc(50% - var(--border-size)*5);
            transform: rotateY(0deg) rotateZ(0deg);
            animation: none;`;
            top_border.style.cssText = `
            top: calc(50.1011% - var(--border-size)*12.5);
            transform: rotateY(0deg) rotateZ(-90deg);
            animation: none;`;
            bottom_border.style.cssText = `
            bottom: calc(50.0% - var(--border-size)*12.5);
            transform: rotateY(0deg) rotateZ(90deg);
            animation: none;`;
            j = 0;
    
        }
        else{
            j++;
            if (j == 1) {
                document.body.addEventListener('mousemove', mousemovecatch);
            right_border.style.cssText = ``;
            left_border.style.cssText = ``;
            top_border.style.cssText = ``;
            bottom_border.style.cssText = ``;
            }
            
        }
        if (scrollY >= window.innerHeight * 3 + 2) {
            canvas.style.position = 'absolute';
            canvas.style.bottom = '0';
            canvas.style.top = 'auto';
            shadow_art.style.cssText = `
            position: absolute;
            bottom: 5%;
            `;
        }else{
            canvas.style.position = 'fixed';
            canvas.style.bottom = 'auto';
            canvas.style.top = '0';
            shadow_art.style.cssText = ``;
        }
}

// Mouse Movement Animation

var mousemovecatch = e => {
    home_start.style.translate = `${e.clientX / 150}px ${e.clientY / 150}px`;
    canvas.style.translate = `${- e.clientX / 300}px ${- e.clientY / 300}px`;
};





