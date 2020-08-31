import USER_TYPE from "./user-type";

const session = {
  namespaced: true,

  // module assets
  state: () => ({
    logged: true,
    user: {
      type: USER_TYPE.VISITOR,
      name: "Visitante",
      avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
    }
  }),
  mutattions: {},
  actions: {},
  getters: {}
};

export default session;
