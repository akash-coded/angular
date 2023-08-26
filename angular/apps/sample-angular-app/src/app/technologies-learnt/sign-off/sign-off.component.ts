import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-off',
  templateUrl: './sign-off.component.html',
  styleUrls: ['./sign-off.component.css'],
})
export class SignOffComponent {
  signOff = {
    phase: 2,
    session: 9,
    message:
      'Thank you for your time and patience. I hope you enjoyed the session. Please feel free to reach out to me for any questions or clarifications. Have a great day ahead!',
  };
}
