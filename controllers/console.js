const StatusCodes = require("http-status-codes");
const path = require("path");

exports.getPage = (request, response) => {
    response.status(StatusCodes.OK).sendFile(path.join(__dirname, "..", "views", "info.html"))
};

exports.postAngles = (request, response) => {
    var request = request.body;
    var possibleBodyArgs = ["anUno", "anDos", "anTres"];
    var isRectangle = false;
    var finalAngle = 0;
    possibleBodyArgs.forEach((bodyArg) => {
        isRectangle = parseInt(request[[bodyArg]]) === 90 ? true : isRectangle;
        finalAngle += parseInt(request[[bodyArg]])
    });
    response.status(StatusCodes.OK).json({ "message": (isRectangle && (finalAngle === 180)) ? "Es Triángulo Rectángulo" : "No es Triángulo Rectángulo" })
};