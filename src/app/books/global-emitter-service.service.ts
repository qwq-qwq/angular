import {Injectable} from '@angular/core';
import {IEventBus, IEventConsumer} from "./event-service";
import {ApplicationEvent} from "./application-event";

@Injectable()
export class GlobalSyncService {
  private consumers: Array<IEventConsumer> = new Array();

  subscribe(consumer: IEventConsumer): void {
    this.consumers.push(consumer);
  }

  sendEvent(event: ApplicationEvent): void {
    this.consumers.forEach((item: IEventConsumer) => item.handleEvent(event));
  }

  constructor() {
  }

}
