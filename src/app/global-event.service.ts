import {Injectable} from '@angular/core';
import {Observer} from "rxjs/Rx";
import {ApplicationEvent} from "./application-event";
import {Subject} from "rxjs/Subject";

@Injectable()
export class GlobalEventService {
  private subject: Subject<ApplicationEvent> = new Subject();

  constructor() {
  }

  subscribe(observer: Observer<ApplicationEvent>) {
      this.subject.subscribe(observer);
  }

  sendEvent(event: ApplicationEvent): void {
      this.subject.next(event);

  }

}
