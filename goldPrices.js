fetch("http://api.nbp.pl/api/cenyzlota/last/200/?format=json")
  .then((response) => response.json())
  .then((data) => console.log("data after json(): ", data))
  .catch((error) => console.log("Error: ", error));
