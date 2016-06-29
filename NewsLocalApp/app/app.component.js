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
var head_component_1 = require('./templateComponent/head.component');
var addArticle_component_1 = require('./templateComponent/addArticle.component');
var LESNEWS = [
    { id: 1, votes: 4, lien: 'http://www.lefigaro.fr/flash-actu/2016/06/29/97001-20160629FILWWW00113-brexit-l-ecosse-determinee-a-rester-dans-l-ue.php', titre: 'Brexit' },
    { id: 2, votes: 7, lien: 'http://www.belgianfootball.be/fr/selection-des-diables-rouges', titre: 'Allez les belges' },
    { id: 3, votes: 13, lien: '#', titre: 'Alizée en concert' },
    { id: 4, votes: 6, lien: '#', titre: 'Fusion de cerveaux au STE' },
    { id: 5, votes: 24, lien: '#', titre: 'Spoils GOT pour Denis' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Adneom News';
        this.lesnews = LESNEWS;
    }
    AppComponent.prototype.onSelect = function (news) { this.selectedNews = news; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/pages/news.html',
            directives: [head_component_1.HeadComponent, addArticle_component_1.addArticle]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map