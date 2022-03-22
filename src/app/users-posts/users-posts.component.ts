import { Users } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss'],
})
export class UsersPostsComponent implements OnInit {
  // როგორც users-info და users-კომპონენტში გამოყენებულია property userPosts სადაც
  // ვინახავ API დან წამოღებულ მონაცემებს და ასევე userId property სადაც კონკრეტული user-ის აიდის ვინახავ
  userPosts: any;
  public userId: string = '';
  constructor(
    private users: Users,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // გამოყენებულია იგივე ფუნკციონალი როგორიც user-info კომპონენტში მაგრამ
    // აქ request-ს ვაგზავნი არა /users API-ზე არამდენ /comment ზე საიდანაც ვკითხულობ
    // user-ის პოსტებს
    this.activatedRoute.params.subscribe((data: any) => {
      this.userId = data.id;
    });
    this.users.getUserPosts(this.userId).subscribe((data: any) => {
      this.userPosts = data;
    });
  }

  // გვაბრუნებს users-info page-ზე და ამასთან ერთად route ში აყოლებს Id-ის
  backToUsersInfoPage() {
    this.router.navigate(['users-info', this.userId]);
  }
}
