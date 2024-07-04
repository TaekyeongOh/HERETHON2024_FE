function dp_menu() {
    var content = document.getElementById('drop-content');
    var button = document.getElementById('drop-button');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}