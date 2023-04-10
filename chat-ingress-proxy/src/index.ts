import express from 'express';
import routes from './router/routes';
import bodyParser from 'body-parser';

const app = express();


app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
    }
); 