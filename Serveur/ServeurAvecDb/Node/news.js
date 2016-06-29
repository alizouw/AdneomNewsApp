var express = require('express');
var app = express();
//fichier d'exemple !
var news = [
    { "auteur" : "Audrey Hepburn", "texte": "Texte de Hepburn", "commentaires": [
        {"auteurCommentaire": "Julien P.",
         "commentaire": "Très bon film !"            
        },
        {"auteurCommentaire": "Arthur",
         "commentaire": "Nul !"            
        },
        {"auteurCommentaire": "Popol",
         "commentaire": "Très bon film !"            
        }
        ]},
    { "auteur" : "Walt Disney", "texte": "Texte de Disney",
    "commentaires":[]},
    { "auteur" : "Unknown", "texte": "Texte",
    "commentaires":[]},
    { "auteur" : "Julien Pirenne", "texte": "Le PHP pour les nuls",
    "commentaires":[]}
];
module.exports=news;
