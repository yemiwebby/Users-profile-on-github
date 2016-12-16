import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username='koluyem';
    private client_id = 'cce85fe2b6e6b1a86d19';
    private client_secret = '3a942eed023ca3ee6b846f8d7b6d05abd416bb97';


    constructor(private _http: Http) {
        console.log('I am a service');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
           .map( res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
           .map( res => res.json());
    }

    updateUsername(username:any){
        this.username = username;
    }
} 