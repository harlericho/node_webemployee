const connection = require("../config/connection");

const getAllEmployee = async (req, res) => {
  try {
    const sql = "SELECT * FROM employee";
    await connection.query(sql, (error, data) => {
      if (error) throw error;
      res.render("index", { data: data });
    });
  } catch (error) {
    console.log(
      "❌ ~ file: employee.controller.js ~ line 7 ~ getAllEmployee ~ error",
      error
    );
  }
};
const getEmployee = async (req, res) => {
  try {
    const employee = req.params;
    const sql = "SELECT * FROM employee WHERE id = ?";
    await connection.query(sql, [employee.id], (error, data) => {
      if (error) throw error;
      res.render("edit", { message: "Form edit", data: data[0] });
    });
  } catch (error) {
    console.log(
      "❌ ~ file: employee.controller.js ~ line 7 ~ getAllEmployee ~ error",
      error
    );
  }
};
const postEmployee = async (req, res) => {
  try {
    const employee = req.body;
    const sql = "INSERT INTO employee SET ?";
    await connection.query(sql, employee, (error, data) => {
      if (error) throw error;
      res.redirect("/");
    });
  } catch (error) {
    console.log(
      "❌ ~ file: employee.controller.js ~ line 7 ~ getAllEmployee ~ error",
      error
    );
  }
};
const putEmployee = async (req, res) => {
  try {
    const employee = req.body;
    const sql = "UPDATE employee SET ? WHERE id =?";
    await connection.query(sql, [employee, employee.id], (error, data) => {
      if (error) throw error;
      res.redirect("/");
    });
  } catch (error) {
    console.log(
      "❌ ~ file: employee.controller.js ~ line 7 ~ getAllEmployee ~ error",
      error
    );
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const employee = req.params;
    const sql = "DELETE FROM employee WHERE id =?";
    await connection.query(sql, [employee.id], (error, data) => {
      if (error) throw error;
      res.redirect("/");
    });
  } catch (error) {
    console.log(
      "❌ ~ file: employee.controller.js ~ line 7 ~ getAllEmployee ~ error",
      error
    );
  }
};
module.exports = {
  getAllEmployee,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
};
