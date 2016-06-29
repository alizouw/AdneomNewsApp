import { Component} from '@angular/core';
import { HeadComponent } from './templateComponent/head.component';
import { addArticle } from './templateComponent/addArticle.component';
import { News } from './templateComponent/news';

const LESNEWS: newsProp[] = [
  { id: 1, votes: 4, lien: 'http://www.lefigaro.fr/flash-actu/2016/06/29/97001-20160629FILWWW00113-brexit-l-ecosse-determinee-a-rester-dans-l-ue.php', titre: 'Brexit'},
  { id: 2, votes: 7, lien: 'http://www.belgianfootball.be/fr/selection-des-diables-rouges', titre: 'Allez les belges'},
  { id: 3, votes: 13, lien: '#', titre: 'Alizée en concert'},
  { id: 4, votes: 6, lien: '#', titre: 'Fusion de cerveaux au STE'},
  { id: 5, votes: 24, lien: '#', titre: 'Spoils GOT pour Denis'}
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/pages/news.html',
  directives : [HeadComponent,addArticle]
})

export class AppComponent {
  title = 'Adneom News';
    lesnews = LESNEWS;
  selectedNews: News;
  onSelect(news: News) { this.selectedNews = news; }
}