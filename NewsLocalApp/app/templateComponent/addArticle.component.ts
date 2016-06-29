import { Component, Input } from '@angular/core';
import { addArt } from './addArticle';
import { News } from './news';


@Component ({
    selector: 'addArticle',
    template: `
        <section id="ajout">
			<div class="container">
				<h2>Ajouter une news</h2>
				<form action="">
                <input type="text" placeholder="Titre de la news..." [(ngModel)]="titre">
					<input type="text" placeholder="Lien vers le site..." [(ngModel)]="url">
                    <input type="button" name="ajouter" (click)="ajoutArticle(titre,url)" value="Ajouter">
				</form>
				<hr>
			</div>
		</section>
    `
})

export class addArticle { 
    @Input() lesnews:newsProp[];
    ajoutArticle(titre,url){
        if(titre != undefined && url != undefined){
            this.lesnews.push({ id: 69, votes: 0, lien: url, titre: titre});
        }
    }
}