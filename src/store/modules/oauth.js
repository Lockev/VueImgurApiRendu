import api from "./../../api/imgur";

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const actions = {
  login: () => {
    api.login();
    router.push({ name: 'Index' })
  },
  logout: () => {
    localStorage.removeItem('imgur_token')
    router.push({ name: 'Index' })
  }
};

export default {
  actions

};
