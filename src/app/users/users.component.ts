import { Users } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // usersData არის property რომელშიც ვინახავთ API დან დაბრუნებულ response-ს
  public usersData: any = [];
  constructor(private users: Users, private router: Router) {}

  ngOnInit(): void {
    // რა თქმა უნდა რომ ngOnInit ში უნდა იყოს მონაცემების წამოღება და გატოლება usersData-ს ცვლადზე რადგან საიტის
    // ჩატვირთვისთანავე მოხდეს წამოღება, users არის სერვისი რომელშიც მიწერია getUsers() მეთოდი.
    // წასაკითხად get request არის გამოყენებული
    this.users.getUsers().subscribe((data: any) => {
      this.usersData = data;
    });
  }

  // ეს მეთოდი შექმნილია იმისთვის რომ button-ზე დაკლიკებისას მოხდეს
  // ნავიგაცია user-info component-ზე, ამას თან ვატანთ userId-ის რომელსაც იღებს template-შივე
  userClick(userId: number) {
    this.router.navigate(['users-info', userId]);
  }
}
