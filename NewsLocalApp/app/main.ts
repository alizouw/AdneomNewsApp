import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HeadComponent } from './templateComponent/head.component';
import { addArticle } from './templateComponent/addArticle.component';
bootstrap(AppComponent);
bootstrap(HeadComponent);
bootstrap(addArticle);
