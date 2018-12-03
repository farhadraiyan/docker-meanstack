import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin.model';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showMsg = false;
  admins: Admin[];

  constructor(private adminserv: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminserv.getAdmins()
    .subscribe(admins=>this.admins=admins)
  }
  addAdmin(form: NgForm) {
    let newadmin = {
      userName: form.value.username,
      password: form.value.password

    }
    if (newadmin.userName == "" || newadmin.password == "") {
      this.showMsg = true;
    }
    else {
      this.adminserv.addAdmin(newadmin)
        .subscribe((ad) => this.admins.push(ad));
      this.router.navigate(['/login'])

    }
  }
}
