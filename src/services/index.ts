const url = "http://localhost:8081";

export const checkApi = () =>
  fetch(`${url}`)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });

export const getDataByParam = (query: string) =>
  fetch(`${url}/${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.log(e));

export const getDataByID = (query: string, bookID: number) =>
  fetch(`${url}/${query}/${bookID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.log(e));
