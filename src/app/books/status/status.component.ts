import {Component, OnInit} from '@angular/core';
import {GlobalEventService} from '../global-event.service';
import {ApplicationEvent} from '../application-event';
import {GlobalSyncService} from "../global-emitter-service.service";
import {IEventConsumer} from "../event-service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, IEventConsumer {

  status: string;

  component: string;

  // constructor(private eventService: GlobalEventService) {
  //   this.eventService.subscribe({
  //     'next': (event: ApplicationEvent) => {
  //       this.status = event.message;
  //       this.component = event.source;
  //     }
  //   });
  // }


  constructor(private eventService: GlobalSyncService) {
      eventService.subscribe(this);
  }

  handleEvent(event: ApplicationEvent) {
    this.status = event.message;
    this.component = event.source;
  }

  ngOnInit() {
  }

}
