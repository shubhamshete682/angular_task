import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData:any;
  constructor(private http:HttpClient){ }

  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/posts";
    this.http.get(API)
    .subscribe((res:any)=>{
        console.log(res);
        this.postData=res;
    })
  }
}
