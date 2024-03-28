import axios from "axios";
import { Vendors } from "../models/Vendors";

export const fetchVendors = async (): Promise<Vendors[]> => {
    try{
        const response = await axios.get('https://port4004-workspaces-ws-q9pnq.us10.trial.applicationstudio.cloud.sap/odata/v4/service/vendor/suppliers');
        console.log(response);
        return response.data?.value?.map((item:Vendors)=>({
            AccountNumber: item.AccountNumber,
            Country: item.Country,
            Name1: item.Name1,
            City: item.City,
            District: item.District,
            PostalCode: item.PostalCode,
            State: item.State,
            Address1: item.Address1,
            Address2: item.Address2
        })) || [];
    }
    catch(error){
        console.error('Error fetching customer data:',error);
        return [];
    }
}