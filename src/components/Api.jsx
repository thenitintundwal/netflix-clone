const Api = () => {
  const url =
    "https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "51c7e534dcmshe602ba2bff7b4e1p14dc55jsn935ed066cedc",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };

  try {
    const response = fetch(url, options);
    const result = response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default Api;
