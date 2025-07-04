document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const resultadoBox = document.getElementById('resultado');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const visita = document.getElementById('VISITA').value;
    const custo = document.getElementById('CUSTO').value;
    const telefone = document.getElementById('TELEFONE').value.trim();
    const observacoes = document.getElementById('OBS').value.trim();

    // Gera o texto formatado
    const resultadoTexto = `Necessário visita técnica: ${visita}
Custo da manutenção: ${custo}
Telefone: ${telefone}
Observações: ${observacoes}`;

    // Mostra no textarea
    resultadoBox.value = resultadoTexto;

    // (opcional) seleciona automaticamente para facilitar cópia
    resultadoBox.select();
  });
});