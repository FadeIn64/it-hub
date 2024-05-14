
class filtersFunctions{
    async filter(value: string, data: any[]){
        data.filter(v=>{
            if(v.themes.indexOf(value)!=-1){
                return v
            }
        })
        return data
    }
}

export default filtersFunctions