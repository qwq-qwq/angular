import {Injectable} from '@angular/core';
import {Observer} from "rxjs/Rx";
import {ApplicationEvent} from "./application-event";
import {Subject} from "rxjs/Subject";
import {NextObserver} from "rxjs/Observer";

@Injectable()
export class GlobalEventService {
  private subject: Subject<ApplicationEvent> = new Subject();

  constructor() {
  }

  subscribe(observer: NextObserver<ApplicationEvent>) {
      this.subject.subscribe(observer);
  }

  sendEvent(event: ApplicationEvent): void {
      this.subject.next(event);

  }

}
