exports.install = function() {
    //user
    ROUTE('POST /api/user/login', ['*user/Login-->@exec']);
    ROUTE('GET /api/user', ['*User-->@get']);
    ROUTE('POST /api/user', ['*User-->@save']);
    ROUTE('GET /api/user', ['*User-->@grid']);
    ROUTE('DELETE /api/user', ['*User-->@remove']);

    //proxy
    PROXY('/cdn/upload', MAIN.cdn.upload);
    FILE('/cdn/image/', img_proxy,  ['.jpg', '.jpeg', '.png', '.gif']);
}

function img_proxy(req, res) {    
    res.proxy(CONF.cdn.host+'/'+req.path.slice(-2).join('/'), NOOP);
    return;
}
