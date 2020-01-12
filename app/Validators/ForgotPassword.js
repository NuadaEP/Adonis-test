"use strict";

class ForgotPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      required_url: "required|url"
    };
  }
}

module.exports = ForgotPassword;
