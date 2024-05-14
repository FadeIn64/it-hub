import { makeAutoObservable } from "mobx";

class postStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _post: any;
    private _players: any=[];
    private _player: any;

    getPost(){
        return this._post;
    }

    setPost(post: any){
        this._post=post;
    }

    getPlayers(){
        return this._players;
    }

    setPlayers(players: any){
        this._players=players;
    }

    getPlayer(){
        return this._player;
    }

    setPlayer(player: any){
        this._player=player;
    }



}

export default new postStore()