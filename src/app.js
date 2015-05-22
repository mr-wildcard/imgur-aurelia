export class Welcome {
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

    heading = 'Wassup dude ?';
    firstName = 'John';
    lastName = 'Joe';

    get fullName()
    {
      return `${this.firstName} ${this.lastName}`;
    }

    welcome()
    {
      alert(`Welcome, ${this.fullName} !`);
    }
}
