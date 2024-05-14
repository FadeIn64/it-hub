import { makeAutoObservable } from "mobx";

class challengesStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _challenges: any = [];
    private _challenge: any;

    getChallenges(){
        return this._challenges;
    }

    setChallenges(chls: any){
        this._challenges=chls;
    }

    getChallenge(){
        return this._challenge;
    }

    setChallenge(chl: any){
        this._challenge=chl;
    }
 }

 export default new challengesStore()