async function fetchCount() {
  try {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    const results = data.results

    let texto = ""
    document.getElementById('area').innerHTML
    results.map((result, index) => {
      texto += `
      <h1>Personagem numero: ${index + 1}</h1>
      <p>Nome do personagem: ${result.name}</p>
      <p>Altura do personagem: ${result.height}m</p>
      `
    })
    document.getElementById('area').innerHTML = texto
  } catch (error) {
    console.error(error);
  }
}

