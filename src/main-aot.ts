/**
 * Created by IT-Discovery on 11.06.2017.
 */
import {platformBrowser}    from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
