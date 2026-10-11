document.getElementById('year').textContent = new Date().getFullYear();

const copyEmailButton = document.getElementById('copy-email');
const copyFeedback = document.getElementById('copy-feedback');

copyEmailButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('alefismael55@gmail.com');
    copyFeedback.textContent = 'E-mail copiado!';
  } catch {
    copyFeedback.textContent = 'Não foi possível copiar. Selecione o endereço acima.';
  }
});
