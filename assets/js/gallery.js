//Elements Selection
const search_icon = document.querySelector('.search svg');
const search_input = document.querySelector('.search input');
const to_top = document.querySelector('.to_top');
const gallery_container = document.querySelector('.gallery');
const Orientation = document.getElementById('Orientation');
const Dimensions = document.getElementById('Dimensions');
const count = document.querySelector('.count');


search_icon.addEventListener('click',function(){
    search_input.classList.toggle('search_animation');
    search_input.focus();
});

search_input.onkeydown = e => {
    if (e.key === "Enter") {
        search_input.blur();
    }
};

if(window.matchMedia('(max-width: 600px)').matches){
    window.addEventListener('scroll',function(){
        if (this.scrollY >= 200) {
            to_top.style.display = 'inline';
        }else{
            to_top.style.display = 'none';
        }
    });
}


async function getgallery(){
    const response = await fetch('/php/fetchgallery.php');
    return response.json();
}


function display_gallery(galleries){
    let i = 0;
    gallery_container.innerHTML = '';
    galleries.forEach(gallery => {
        const container = document.createElement('div');
        container.className = 'item';
        container.innerHTML = `
            <div>
            <img src="/images/item1.webp" alt="${gallery.Title}">
            </div>
            <hr>
            <div>
                <h4>${gallery.Title}</h4>
                <h5>${gallery.Width}x${gallery.Height}</h5>
                <p>${gallery.Description}</p>
            </div>
        `;
        i++;
        gallery_container.append(container);
    });
    count.innerText = `Gallery(${i})`;
}


async function Update_gallery(){
    const data = await getgallery();
    const search_value = search_input.value.toLowerCase();
    const galleries = data.filter(gallery => {
        const matches_orientation = !Orientation.value || gallery.Orientation.toLowerCase() === Orientation.value;
        const matches_Size = !Dimensions.value || gallery.SizeCategory.toLowerCase() === Dimensions.value;
        const matches_search = !search_value || gallery.Title.toLowerCase().includes(search_value);
        return matches_orientation && matches_Size && matches_search;
    });
    display_gallery(galleries);
}

Update_gallery();
Orientation.onchange = Update_gallery;
Dimensions.onchange = Update_gallery;
search_input.oninput = Update_gallery;
