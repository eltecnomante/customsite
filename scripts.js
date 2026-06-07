document.addEventListener('click', function (event) {
    var insideCard = event.target.closest('.tag-card');
    if (!insideCard) {
        document.querySelectorAll('.tag-card input[type="checkbox"]').forEach(function (input) {
            input.checked = false;
        });
    }
});
