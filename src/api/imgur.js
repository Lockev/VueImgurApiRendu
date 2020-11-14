import axios from "axios";

const CLIENT_ID = "cccede7e89b5bc6";

export default {
  login() {
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  },
  favorite(id) {
    if (localStorage.getItem("imgur_token")) {
      // Si l'utilisateur est connecté
      var config = {
        method: "post",
        url: "https://api.imgur.com/3/image/" + id + `/favorite?client_id=${CLIENT_ID}`,
        headers: {
          Authorization: "Bearer" + localStorage.getItem("imgur_token"),
          "Access-Control-Allow-Credentials": true
        }
      };

      axios(config)
        .then(function(response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.login();
    }
  }
};
