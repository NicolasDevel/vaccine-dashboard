export const AverageAccumulate = (array:any[], key:string) =>{
    let sum=0;
    const data = array?.map((item:any,index)=>{
        sum+= item[key] || 0;
        item.average = Math.ceil(sum/(index+1));
        return item;
    })

    return data;
}