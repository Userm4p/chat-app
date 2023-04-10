import { Router } from "express";
import httpProxy from 'express-http-proxy';

const url = 'http://localhost:4000';

const proxy = httpProxy(url);

const routes = Router();

routes.get('', (req, res, next) => {
    proxy(req, res, next);
}
);


export default routes;