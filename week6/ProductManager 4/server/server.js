const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000

require("./config/mongoose.config");
    

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
require('./routes/product.routes')(app);


const AllMyUserRoutes = require('./routes/product.routes')
AllMyUserRoutes(app);   

app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})