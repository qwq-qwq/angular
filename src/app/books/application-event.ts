export class ApplicationEvent {
   source: string;

   message: string;


  constructor(source: string, message: string) {
    this.source = source;
    this.message = message;
  }
}
