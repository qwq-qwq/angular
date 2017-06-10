import {Component, OnInit} from '@angular/core';
import {GlobalEventService} from '../global-event.service';
import {ApplicationEvent} from '../application-event';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status: string;

  component: string;

  constructor(private eventService: GlobalEventService) {
    this.eventService.subscribe({'next': (event: ApplicationEvent) => {
      this.status = event.message;
      this.component = event.source;
    }, 'error': value => {},
      'complete' : () => {}});
  }

  ngOnInit() {
  }

}
