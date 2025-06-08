let searchForm = document.getElementById('search-form');
let searchBtn = document.getElementById('search-btn');

searchBtn.onclick = function(e) {
    e.preventDefault(); // Prevents page jump
    searchForm.classList.toggle('active');
};