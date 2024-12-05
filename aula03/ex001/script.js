async function fetchCount() {
  try {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    const results = data.results
    const luke = results[0]
    console.log(luke.name);
  } catch (error) {
    console.error(error);
  }
}

