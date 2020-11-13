// import axios from "axios";

const CLIENT_ID = "cccede7e89b5bc6";

export default {
  login() {
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  }
  // getHomePosts(token) {
  //   axios
  //     .get("https://api.imgur.com/3/gallery/hot/viral/0.json", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(response => {
  //       return response;
  //     });
  // }
};
