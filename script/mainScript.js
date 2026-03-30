document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const lotus = document.getElementById('lotus');
    const progressText = document.getElementById('progressText');
    const btnCriarConta = document.querySelector('.btnCriarConta');

    function updateLotus() {
        const userLen = usernameInput.value.trim().length;
        const passLen = passwordInput.value.length;

        lotus.classList.remove('petal1', 'petal2', 'petal3', 'petal4', 'petal5', 'petal6', 'petal7', 'petal8');

        let petals = 0;
        let soma = userLen + passLen
        if (soma >= 16) petals = 8;
        else if (soma >= 14) petals = 7;
        else if (soma >= 12) petals = 6;
        else if (soma >= 10) petals = 5;
        else if (soma >= 8) petals = 4;
        else if (soma >= 6) petals = 3;
        else if (soma >= 4) petals = 2;
        else if (soma >= 2) petals = 1;

        if (petals >= 1) {
            lotus.classList.add(`petal${petals}`);
            progressText.textContent = `${petals}/8`;
        } else {
            progressText.textContent = 'Comece...';
        }
    }

    usernameInput.addEventListener('input', updateLotus);
    passwordInput.addEventListener('input', updateLotus);
    updateLotus();

    if (btnCriarConta) {
        btnCriarConta.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa fa-arrow-right"></i> Redirecionando...';
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                window.location.href = '../pages/signup.html';
            }, 400);
        });
        
        btnCriarConta.addEventListener('mouseenter', () => {
            btnCriarConta.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btnCriarConta.addEventListener('mouseleave', () => {
            if (!btnCriarConta.style.transform.includes('scale(1.05)')) {
                btnCriarConta.style.transform = '';
            }
        });
    }
});