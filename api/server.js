import app from "./app.js";
import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT 
//---> lo sustituimos por process.env.PORT
// al pasar la constante PORT a .env

app.listen(PORT, () => console.log(`Airport is running in 3000`));