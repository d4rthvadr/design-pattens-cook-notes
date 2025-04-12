// types and interfaces

interface ChatMediator {
  sendMessage(message: string, userId: string): void;
  addUser(user: User): void;
}

// concrete mediator
class ChatMassager implements ChatMediator {
  private users: User[] = [];

  constructor() {}

  async sendMessage(message: string, userId: string): Promise<void> {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      console.log(`User ${userId} not found`);
    }

    message = `(${user?.name ?? "Guest"}) says: ${message}`;

    // send message to all users except the sender
    this.users.forEach((user) => {
      if (user.id !== userId) {
        user.receive(message);
      }
    });
    console.log(`Message sent: ${message}`);
  }
  addUser(user: User): void {
    // check if user already exists
    const existingUser = this.users.find((u) => u.id === user.id);
    if (existingUser) {
      console.log(`User ${user.name} already exists`);
      // remove user from chat
      this.users.splice(
        this.users.findIndex((u) => u.id === user.id),
        1
      );
      // at this point we can add the user again if user meta data has changed
    }
    this.users.push(user);
    console.log(`User ${user.name} added to chat`);
  }
}

class User {
  id: string;
  name: string;

  private mediator: ChatMediator;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setMediator(mediator: ChatMassager) {
    this.mediator = mediator;
    this.mediator.addUser(this);
  }

  send(message: string) {
    this.mediator.sendMessage(message, this.id);
  }

  receive(message: string) {
    console.log(`User ${this.name} received message: ${message}`);
  }
}

// Usage
const chatMediator = new ChatMassager();

const user1 = new User("1", "John");
const user2 = new User("2", "Jane");
const user3 = new User("3", "Bob");

// assign mediator to users
[user1, user2, user3].forEach((user) => {
  user.setMediator(chatMediator);
});
