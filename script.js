const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    var navDialog = document.getElementById('nav-dialog');
    if (navDialog.style.display === 'none' || navDialog.style.display === '') {
        navDialog.style.display = 'block';
    } else {
        navDialog.style.display = 'none';
    }
}