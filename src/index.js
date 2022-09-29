let express = require('express');
let cors = require('cors');
let multer = require('multer');

let upload = multer({ dest: './uploads/' });
let app = express();
app.use(cors());

app.post('/upload', upload.array('file'), async (req, res) => {
  res.send({ upload: true, files: req.files });
  console.log("Ola")
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});