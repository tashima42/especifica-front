import Cookies from "js-cookie";

const getLogs = async () => {
  const urlWithParams = 'https://utf-api.tashima.space/Log/GetLogs';
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

export { getLogs }

