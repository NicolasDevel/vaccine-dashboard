import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionKeys, DashboardActions, setDataVaccinateCountry, setError} from './type';
import {apiGetVaccinateCountry} from "../../api/dashboard";
import {IVaccinateCountry} from "../../models/vaccinate";
import {RootState} from "../rootReducer";

export const getVaccinateCountry = ():ThunkAction<Promise<any>, RootState, {}, DashboardActions> => {
    return async (dispatch: ThunkDispatch<RootState,{}, DashboardActions>) => {
        try {
            const response = await (apiGetVaccinateCountry());
            dispatch(getVaccinateCountrySuccess(response));
        }catch (err) {
            dispatch(failedData(err));
        }

    }
}

export const getVaccinateCountrySuccess = (vaccinateCountry: IVaccinateCountry[]):setDataVaccinateCountry => ({
    type: ActionKeys.SET_DATA_VACCINATE_COUNTRY,
    vaccinateCountry
});

export const failedData = (error:string):setError => ({
    type: ActionKeys.SET_ERROR,
    error
});