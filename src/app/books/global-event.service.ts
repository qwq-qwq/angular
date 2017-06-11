import {Injectable} from '@angular/core';
import {Observer} from "rxjs/Rx";
import {ApplicationEvent} from "./application-event";
import {Subject} from "rxjs/Subject";
import {NextObserver} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {IEventBus, IEventConsumer} from "./event-service";

@Injectable()
export class GlobalEventService implements IEventBus {
  private subject: Subject<ApplicationEvent> = new Subject();

  constructor() {
  }

  subscribe(consumer: IEventConsumer) {
    this.subject.subscribe({'next': event => consumer.handleEvent(event)});
  }

  sendEvent(event: ApplicationEvent): void {
    this.subject.next(event);

  }

}
