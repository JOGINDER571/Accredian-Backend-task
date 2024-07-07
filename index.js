const  express =require("express");
const app = express();
const referralRoutes = require('./routes/referralRoutes');

app.use(express.json());
app.use('/api/referrals', referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
