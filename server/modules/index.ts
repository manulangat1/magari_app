import locations from './locations'

const apiPrefix = '/api/v1';

const routes = (app:any) => {
    app.use(apiPrefix,locations)
    return app
}

export default routes;