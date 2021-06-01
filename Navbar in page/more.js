document.getElementById('more').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('mega-more').classList.toggle('show');
      });
document.getElementById('close-more').onclick = function () {
    document.getElementById('mega-more').classList.remove('show');
      };