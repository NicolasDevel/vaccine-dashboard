import {IVaccinateCountry} from "../../models/vaccinate";
import {ActionKeys, DashboardActions} from "./type";

interface DashboardState {
    vaccinateCountry    : IVaccinateCountry [],
    error?              : string
}

const initialState:DashboardState = {
    vaccinateCountry: [],
    error:'',
}

export const reducer = (state:DashboardState = initialState, action: DashboardActions):DashboardState =>{
    switch (action.type){
        case ActionKeys.SET_DATA_VACCINATE_COUNTRY:
            return {
                ...state,
                vaccinateCountry    :   action.vaccinateCountry
            };
        case ActionKeys.SET_ERROR:
            return {
                ...state,
                error   :   action.error
            }
        default:
            return state;
    }
}