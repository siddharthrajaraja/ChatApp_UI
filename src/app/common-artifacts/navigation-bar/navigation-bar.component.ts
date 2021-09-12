import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  utilOptions = [
    {
      name : "Home",
      url : '/home'
    },
    {
      name : "Login",
      url : '/login'
    },
    {
      name:"Register",
      url : '/register'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  id : string = ""
  updateUnderlinedStyle(id:string){
    this.id=id.toLocaleLowerCase()
    console.log("id :",this.id)
  }
}
