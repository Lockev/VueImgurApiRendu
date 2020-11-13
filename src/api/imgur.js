// import axios from "axios";

const CLIENT_ID = "cccede7e89b5bc6";

export default {
  login() {
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  }
};
