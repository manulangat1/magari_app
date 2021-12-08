import { Request,Response} from 'express'

import errorHandler from '../../helpers/errorHandler'
import responseHandler from '../../helpers/responseHandler'
class LocationController{
    static async getCurrentLocation(req:Request,res:Response){
        try{
            return responseHandler(res,"Your data is loaded",200,"Your data is loaded");
        } catch(error:any){
            return errorHandler.handleError(error?.message,500,res)
        }
    }
};

export default LocationController;
