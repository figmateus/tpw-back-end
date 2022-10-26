const app = require('./src/app');
const port = process.port || 3000;

app.listen(port,()=>{
    console.log(`aplicação executando na porta...:http://localhost:${port}`);
});