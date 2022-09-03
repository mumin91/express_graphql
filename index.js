import express from 'express'

const app = express();










const home = (req, res) => res.send('Graphql is good');


app.get('/', home);

app.listen(5000, () => console.log("running on port 5000"));