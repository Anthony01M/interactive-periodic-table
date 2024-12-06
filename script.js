document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const symbol = this.getAttribute('data-symbol');
        const number = this.getAttribute('data-number');

        document.getElementById('element-name').textContent = name;
        document.getElementById('element-symbol').textContent = symbol;
        document.getElementById('element-number').textContent = number;

        document.getElementById('element-info').style.display = 'block';
    });
});

document.getElementById('close-info').addEventListener('click', function() {
    document.getElementById('element-info').style.display = 'none';
});