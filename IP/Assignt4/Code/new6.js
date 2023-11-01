function fetchData(url, params) {
  return new Promise((resolve, reject) => {
    if (!params) {
      reject(new Error("Params are missing"));
      return;
    }
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: 
${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
let params = { key: "europe" };
let url = `https://restcountries.com/v3.1/region/${params.key}`;
console.log(url);
fetchData(url, params)
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
