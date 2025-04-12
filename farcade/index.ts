namespace farcade {
  class Buffer extends Array {
    private height: number;
    private width: number;

    constructor(width: number = 30, height: number = 20) {
      super();
      this.width = width;
      this.height = height;
      this.alloc(width * height);
    }

    private alloc(size: number) {}

    write(text: string, position: number) {}
  }

  class ViewPort {
    private offset: number = 0;
    constructor(public buffer: Buffer = new Buffer()) {}

    append(text: string, position: number) {
      this.buffer.write(text, this.offset + position);
    }

    getCarAt(index: number) {
      return this.buffer[index + this.offset];
    }
  }

  class Console {
    private buffer: Buffer;

    private currentViewPort: ViewPort;

    private viewPorts: ViewPort[];

    private buffers: Buffer[];

    constructor() {
      this.buffer = new Buffer();
      this.currentViewPort = new ViewPort(this.buffer);

      this.buffers = [this.buffer];
      this.viewPorts = [this.currentViewPort];
    }

    write(text: string) {
      this.currentViewPort.append(text, 9);
    }

    getCharAt(index: number) {
      this.currentViewPort.getCarAt(index);
    }
  }
}
