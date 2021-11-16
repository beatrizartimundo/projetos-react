export default function Mega() {

  const numerosMega = () => {
    const qtdNumeros = document.querySelector('#valor').value;
    const resultado = document.getElementById('result');
    const numMega = [];

    for (let i = 0; i < qtdNumeros; i++) {

      let novoNumero = Math.floor(Math.random() * (100 - 1)) + 1

      if (!numMega.includes(novoNumero)) {

        numMega.push(novoNumero);
        numMega.sort()

      }
    }

    return resultado.innerHTML =numMega;
  };

  return (
    <div>
      <input type="text" id="valor" />
      <button type="button" onClick={numerosMega}>Gerar mega</button>
      <div id="result"></div>
    </div>
  )
}