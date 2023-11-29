import { monitorRequest } from './logging';
export function routeNotFound(req, res, next) {
    const paths = /^(\/personal|\/skills|\/education|\/reference)/;
    if (!paths.test(req.originalUrl)) {
        res.status(404).json({ msg: 'Route not found' });
        monitorRequest(req, res, next, true);
    }
    else {
        next();
    }
}
