document.addEventListener('DOMContentLoaded', function() {
    var secretCode = '1337';
    var typedCode = '';

    window.addEventListener('keyup', function(e) {
        typedCode += e.key;
        if (typedCode === secretCode) {
            showModal();
            typedCode = '';
        } else if (!secretCode.startsWith(typedCode)) {
            typedCode = '';
        }
    });

    function showModal() {
        // Hämta modalen
        var modal = document.getElementById('1337Modal');
        // Visa modalen
        modal.style.display = 'block';

        // När användaren klickar utanför modalen, stäng den
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
});
