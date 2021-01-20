const express = require('express');
const connectDB = require("./config/db")

//adding Express
const app = express();

//connect Database
connectDB();
//init middleware
app.use(express.json());
app.get('/', (req, res) => res.send('API Running'))
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000 //run on port
//const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));