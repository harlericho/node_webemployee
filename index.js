const app = require("./app/app");

app.listen(app.get("port"), () => {
  console.log(
    "🌎 ~ host: Server running on: => http://127.0.0.1:" + app.get("port")
  );
});
