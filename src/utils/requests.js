const BASE = "http://vindev.cx.ua";

export const signupUser = async (body, callback) => {
  try {
    const res = await fetch(`${BASE}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body,
    }).then((responce) => responce.json());
    if (res.status === 403) {
      throw new Error("Something went wrong, please try again");
    }
    callback(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImV4ZW1wbGVAbWFpbC5jb20ifSwiaWF0IjoxNjc1ODEyNzIwfQ.AciwfR7cebH6lQoopw5xEeXBn72CzswY-iIbRcaqwNw"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (body, callback) => {
  try {
    const res = await fetch(`${BASE}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body,
    }).then((responce) => responce.json());
    if (res.status === 403) {
      throw new Error("Something went wrong, please try again");
    }
    callback(res.token);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getDashboard = async ({ queryKey }) => {
  try {
    const res = await fetch(`${BASE}/dashboard`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${queryKey[1]}`,
      },
    }).then((responce) => responce.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};
