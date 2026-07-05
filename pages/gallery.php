<?php
$title = 'Gallery';
$stylesheet = '/assets/css/gallery.css';
$script = '/assets/js/gallery.js';
include '../includes/header.php';
?>
<main>
    <div class="filter">
        <span>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
            </svg>

            <h2>Filter</h2>
        </span>
        
        <div class="filter1">
            <h4>Orientation</h4>
            <select name="Orientation" id="Orientation">
                <option value="">All</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
            </select>
        </div>
        
        <div class="filter2">
            <h4>Dimensions (cm)</h4>
            <select name="Dimensions" id="Dimensions">
                <option value="">All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    </div>
    <div class="search">
        <h2 class="count">Gallery(0)</h2>
        <input placeholder="Search" type="search" name="" id="search_input" class="search_input">
        <svg id="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
                </path>
            </svg>
    </div>
    <div class="gallery">

    </div>
    

</main>
<a class="to_top" href="#top">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
</svg>
</a>
<?php include '../includes/footer.php'; ?>