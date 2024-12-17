import app from './app';
import Logger from './library/Logger';
import loadingRoutes from './config/loadingRoutes';
const port = process.env.PORT || 3000;
const log = new Logger();

const application = loadingRoutes(app);

const server = application.listen(port, () => {
    log.trace(`api initiate now on port ${port}`);
})
