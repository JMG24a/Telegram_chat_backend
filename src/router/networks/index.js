exports.success = function(req,res,message,status) {
    res.status(status || 200).json({
        "error": "",
        "success": message
    })
}

exports.error = function(req,res,error,status) {
    res.status(status || 200).json({
        "error": error,
        "success": ""
    })
}