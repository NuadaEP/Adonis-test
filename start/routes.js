"use strict";

const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");

Route.post("forgot-password", "ForgotPasswordController.store");
Route.put("forgot-password", "ForgotPasswordController.update");

Route.get("files/:id", "FileController.show");
Route.post("files", "FileController.store");
