const app = require('./app');
const connectDB = require('./config/database');
require("dotenv").config({ path: './.env' });

// Connect to MongoDB
connectDB();

// Connect To the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
