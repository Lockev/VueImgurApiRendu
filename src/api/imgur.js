// import Axios from "axios";

const CLIENT_ID = "1e4f0f7f7804234";

export default {
  login() {
    console.log("Passé dans api/imgur");
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  }
};
