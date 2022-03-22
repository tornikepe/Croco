import { Users } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  // როგორც user ების კომპონენტში აქაც გამოცხადებულია property usersData რომელშიც
  // ვინახავ წამოღებულ data-ს
  public usersData: any = [];

  // ასევე შექმნილია userId property რომელჩიც ვინახავ user-ის Id-ის
  public userId: string = '';

  constructor(
    private users: Users,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // აქ ვწვდები data-ს Id-ის რომელსაც ვუტოლებ userId-ის, რადგან გადავცე service ში
    // ჩაწერილ getUserId() მეთოდს
    this.activatedRoute.params.subscribe((data: any) => {
      this.userId = data.id;
    });

    // როდესაც გადავცემ userId-ის მას ვუტოლებ usersData-ს და უკვე წვდომა მაქვს კონკრეტულ users-ზე
    this.users.getUserId(this.userId).subscribe((data: any) => {
      this.usersData = data;
    });
  }

  // ეს მეთოდი ნავიგაციას აკეთებს users-post component-ზე და თან ვაყოლებთ კონკრეტული user-ის Id-ის
  onPostsClick() {
    this.router.navigate(['users-posts', this.userId]);
  }

  // ამ მეთოდს კი უბრალოდ უკან დაბრუნება შეუძლია users component-ზე
  onUsersClick() {
    this.router.navigate(['users']);
  }
}
