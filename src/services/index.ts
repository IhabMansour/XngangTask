const url = "http://localhost:8081";

export const getDataByParam = (query: string) =>
  fetch(`${url}/${query}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));

export const getDataByID = (query: string, bookID: number) =>
  fetch(`${url}/${query}/${bookID}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
