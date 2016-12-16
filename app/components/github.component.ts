import { Component } from '@angular/core'
import { GithubService } from '../services/github.service'

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  providers: [GithubService]
})

export class GithubComponent { 

    user:any;
    repos:any;
    username:any;

    constructor(private _githubservice:GithubService){
      // To load user's profile only on request
    //   this.user = false;

// load user's profile by default
        this._githubservice.getUser().subscribe( user => {
            this.user = user;
            // console.log(user);
        })

        this._githubservice.getRepos().subscribe( repos => {
            this.repos = repos;
            // console.log(repos)
        })
    }

    search(){
        this._githubservice.updateUsername(this.username);

         this._githubservice.getUser().subscribe( user => {
            this.user = user;
            // console.log(user);
        })

        this._githubservice.getRepos().subscribe( repos => {
            this.repos = repos;
            // console.log(repos)
        })
    }
}

   