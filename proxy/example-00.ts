interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadImageFromDisk();
  }

  private loadImageFromDisk(): void {
    console.log(`Loading ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage;

  constructor(private filename: string) {}

  display(): void {
    if (!this.realImage) {
      console.log(`Proxy: Loading ${this.filename}`);
      this.realImage = new RealImage(this.filename); // Lazy loading
    }
    this.realImage.display();
  }
}

// Usage
const image1: Image = new ProxyImage("image1.jpg");
const image2: Image = new ProxyImage("image2.jpg");
image1.display(); // Loads and displays the image
image1.display(); // Displays the image without loading
image2.display(); // Loads and displays the image

interface DataService {
  getData(): string;
}

class RealDataService implements DataService {
  getData(): string {
    return "Real data";
  }
}
class ProxyDataService implements DataService {
  private realDataService: RealDataService;

  constructor(private user: { role: string }) {}
  isAdmin(): boolean {
    return this.user.role === "admin";
  }

  checkAdminRole(): void {
    if (this.isAdmin()) {
      throw new Error("Access denied");
    }
  }

  getData(): string {
    this.checkAdminRole();

    if (!this.realDataService) {
      console.log("Proxy: Creating RealDataService");
      this.realDataService = new RealDataService();
    }

    return this.realDataService.getData();
  }
}
