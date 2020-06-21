const app = require('../../server');
require('dotenv').config()
const databaseConfig = require('../config/db');
const port = process.env.PORT;


app.listen(port, () => {
  console.log(
    `::: server listening on port ${port}. Open via http://localhost:${port}/`
  );
  databaseConfig();
});