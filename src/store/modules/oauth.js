import api from "./../../api/imgur";

const actions = {
  login: () => {
    api.login();
    console.log("Passé dans store/oauth");
  }
};

export default {
  actions
};
