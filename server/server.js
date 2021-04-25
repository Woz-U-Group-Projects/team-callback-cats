import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { readdirSync } from 'fs';
const morgan = require('morgan');

require("dotenv").config();

const app = express();

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log("DB connection error", err));


//middleware
app.use(cors());
app.use(morgan("dev"));

//routes middleware
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
