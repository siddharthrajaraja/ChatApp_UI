import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialLinks = [
    {
      url:'https://www.facebook.com/siddharthraja.raja/',
      icon:'../../../assets/icons/facebook.png',
      className:'facebook'
    },
    {
      url : 'https://www.linkedin.com/in/siddharth-raja/',
      icon:'../../../assets/icons/linkedin.png',
      className:'linkedin'
    },
    {
      url : 'https://github.com/siddharthrajaraja',
      icon:'../../../assets/icons/github.png',
      className:'github'
    },
    {
      url : 'https://leetcode.com/siddharthraja9849/',
      icon:'../../../assets/icons/leetcode.png',
      className:'leetcode'
    },
    {
      url : 'https://www.codechef.com/users/siddharthraja',
      icon:'../../../assets/icons/codechef.png',
      className:'codechef'
    },
    {
      url : 'https://www.hackerrank.com/siddharthraja981',
      icon:'../../../assets/icons/hackerrank.png',
      className:'hackerrank'
    }
  ]
  otherWebsites =[
    {
      url : 'https://templesofindia.org/',
      websiteName : 'Temples of India',
      className:'tofi',
      renderWebsiteName : true,
      icon:'../../../assets/icons/tofi.png'
    },
    {
      url : 'https://get-tested-covid19.org/',
      websiteName : 'Get Tested Covid 19',
      className:'get-tested-covid19',
      renderWebsiteName: false,
      icon:'../../../assets/icons/getTested.png'
    }  
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.socialLinks.length)
  }

}
