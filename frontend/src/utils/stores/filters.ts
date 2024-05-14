import { makeAutoObservable } from "mobx";

class filtersStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _themes: string[]
    private _def_qas: any[]

    getThemes(){
        return this._themes;
    }

    setThemes(themes: string[]){
        this._themes=themes
    }

    getQA(){
        return this._def_qas;
    }

    setQA(qas: string[]){
        this._def_qas=qas
    }
}
export default new filtersStore()