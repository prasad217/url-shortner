const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');

const app = express()

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));



const port = process.env.PORT || 1337;
app.listen(port , ()=>{
    console.log(`listeninig to local port ${port} `);
});