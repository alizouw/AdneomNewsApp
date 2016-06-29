"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var addArticle = (function () {
    function addArticle() {
    }
    addArticle.prototype.ajoutArticle = function (titre, url) {
        if (titre != undefined && url != undefined) {
            this.lesnews.push({ id: 69, votes: 0, lien: url, titre: titre });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], addArticle.prototype, "lesnews", void 0);
    addArticle = __decorate([
        core_1.Component({
            selector: 'addArticle',
            template: "\n        <section id=\"ajout\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h2>Ajouter une news</h2>\n\t\t\t\t<form action=\"\">\n                <input type=\"text\" placeholder=\"Titre de la news...\" [(ngModel)]=\"titre\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"Lien vers le site...\" [(ngModel)]=\"url\">\n                    <input type=\"button\" name=\"ajouter\" (click)=\"ajoutArticle(titre,url)\" value=\"Ajouter\">\n\t\t\t\t</form>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], addArticle);
    return addArticle;
}());
exports.addArticle = addArticle;
//# sourceMappingURL=addArticle.component.js.map