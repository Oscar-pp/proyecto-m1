import app from "./app.js";
const PORT = 3000; 
//---> lo sustituimos por process.env.PORT
// al pasar la constante PORT a .env

app.listen(PORT, () => console.log(`Airport is running in 3000`));