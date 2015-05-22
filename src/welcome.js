export class Welcome {

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
