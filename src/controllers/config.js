import Cookies from "js-cookie";

const getLogin = async () => {
  const urlWithParams = 'https://utf-api.tashima.space/Login/Me';

  const response = await fetch(urlWithParams, { 
    method: "GET", 
    headers: {
      "Authorization": "Bearer " + Cookies.get("token")
    } 
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseBody = await response.json();
  return responseBody
};

const updateLogin = async (login) => {
  const urlWithParams = 'https://utf-api.tashima.space/Login/EditLogin/' + login.id;

  const response = await fetch(urlWithParams, { 
    method: "PUT", 
    headers: {
      "Authorization": "Bearer " + Cookies.get("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

}

const createLogin = async (login) => {
  const urlWithParams = 'https://utf-api.tashima.space/Login/CreateLogin';

  const response = await fetch(urlWithParams, { 
    method: "POST", 
    headers: {
      "Authorization": "Bearer " + Cookies.get("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

}

export { getLogin, updateLogin, createLogin }

