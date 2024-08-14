import Cookies from "js-cookie";

const getLogs = async () => {
  const urlWithParams = 'https://utf-api.tashima.space/Log/GetLogs';

  try {
    const response = await fetch(urlWithParams, { 
      method: "GET", 
      headers: {
        "Authorization": "Bearer " + Cookies.get("token")
      } 
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return;
    }

    const responseBody = await response.json();

    return responseBody
  } catch (error) {
    console.error("An unexpected error occurred during get logs:", error);
  }
};

export { getLogs }

