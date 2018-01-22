class Runner {
  constructor(private message: string) {}

  run(): void {
    document.write(`<h1>${this.message}</h1>`);
  }
}

new Runner('Hello TypeScript!').run();
