import { DAYSWEEK } from "../constants/Week"

export const GroupByDayWeek = (array:any[], keyDate:string, keyData:string) => {
    let data = DAYSWEEK;
    array?.forEach((day:any)=>{
        data.find((item)=>new Date(day[keyDate]).getDay()===item.numberDay)!.value+=day[keyData] || 0;
    });

   return data;
}