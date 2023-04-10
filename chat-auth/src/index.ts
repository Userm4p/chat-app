import express from 'express';
import environments from './config/environments';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/routes', routes);

app.listen(environments.PORT ,() => {
    console.log(`Server running on port ${environments.PORT}`);
})