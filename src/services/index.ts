const url = "http://localhost:8081";

export const getDataByParam = (query: string) =>
  fetch(`${url}/${query}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
