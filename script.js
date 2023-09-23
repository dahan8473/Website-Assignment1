<script>
document.querySelectorAll('a[href^="#"]').function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        let offset = 0; // Adjust this value based on the height of your navbar

        window.scroll({
            top: target.offsetTop - offset,
            left: 0,
            behavior: 'smooth'
        });
    })}
);


</script>



