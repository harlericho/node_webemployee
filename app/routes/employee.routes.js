const express = require("express");
const router = express.Router();
const employee = require("../controllers/employee.controller");
router.get("/", employee.getAllEmployee);
router.get("/create", (req, res) => {
  res.render("create", { message: "Form add" });
});
router.post("/save", employee.postEmployee);
router.post("/update", employee.putEmployee);
router.get("/edit/:id", employee.getEmployee);
router.get("/delete/:id", employee.deleteEmployee);

module.exports = router;
