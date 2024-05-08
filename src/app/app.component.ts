import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-example';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  login() {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8000/login', payload).subscribe(
      (response: any) => {
        alert(response.message);
        console.log(response);
        // Handle successful login here
      },
      error => {
        console.log(error);
        alert(error.error.message);
        // Handle error here
      }
    );
  }
}
