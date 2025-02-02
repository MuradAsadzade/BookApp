class Router {
    constructor() {
        this.routes = {};
    }

    addRoute(path, handler, isExtractId = false) {
        this.routes[path] = { handler, isExtractId };
    }

    handleRoute(req, res) {
        const { url } = req;
        let splittedUrl = url;

        

        if (this.isParamPath(url))
            splittedUrl = this.getParamPath(url);

        const route = this.routes[splittedUrl];
        if (!route)
            return false;

        const { handler, isExtractId } = route;
        const id = isExtractId ? this.extractIdFromUrl(url) : null;
        handler(req, res, id);
        return true;
    }

    isParamPath(url) {
        const lastPart = url.split('/').pop();
        console.log(lastPart);
        return !isNaN(+lastPart);
    }



    getParamPath(url) {
        const splittedUrl = url.split('/');
        splittedUrl.pop();
        return `${splittedUrl.join('/')}/`;
    }

    extractIdFromUrl(url) {
        return Number(url.split('/').pop());
    }
}

module.exports = Router;