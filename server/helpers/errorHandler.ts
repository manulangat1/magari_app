import {  Response} from 'express';

class errorHandler{
    static async handleError(error:any,statusCode:any,res:Response){
        return res.status(statusCode).json({
            success:false,
            error
        })
    }
}
export default errorHandler;