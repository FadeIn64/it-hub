import { makeAutoObservable } from "mobx";

class postStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _post: any;

    getPost(){
        return this._post;
    }

    setPost(post: any){
        this._post=post;
    }

}

export default new postStore()