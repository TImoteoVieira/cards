const app = require("./routes")
const port = 3010;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
