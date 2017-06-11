import {ApplicationEvent} from "./application-event";
import {NextObserver} from "rxjs/Observer";

export interface IEventBus {
  subscribe(consumer: IEventConsumer);

  sendEvent(event: ApplicationEvent): void;
}

export interface IEventConsumer {
    handleEvent(event: ApplicationEvent): void;
}
