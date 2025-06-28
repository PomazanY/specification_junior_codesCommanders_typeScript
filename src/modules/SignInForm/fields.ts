export const fields = {
  username: {
    name: "username",
    type: "text",
    placeholder: "Name",
    rules: {
      required: "Name is required"
    }
  },

  email: {

    name: "email",
    type: "text",
    placeholder: "Email",
    rules: {
      required: "Email required",
      pattern: {
        message: "Email must contain @",
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },
  },

};
