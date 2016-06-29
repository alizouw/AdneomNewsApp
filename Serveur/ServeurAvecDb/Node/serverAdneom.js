var express = require('express');
var http = require('http');
var mongodb = require('mongodb').MongoClient;
var news = require("./news.js");
var app = express();
var server = http.createServer(app);
var objNew = { titre:"Salut Julien", lien:"unlien" }; 

//EXPRESS :

app.listen(process.env.PORT || 8080);


//affichage de toutes les news
app.get('/', function(req, res) {
     
    //cette fonction ne marche pas (because connexion not working)
    //afficherAllNews();
    
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    //res.json(news);
    
});


//obtention d'un article spécifique
app.get('/news/:id', function(req, res) {
    
    if(news.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Erreur 404: Pas de citation correspondante à cette Id');
    }  
    var q = news[req.params.id];
    //console.log(q);
    
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    res.json(q);
});


//ajouter un article
app.put('/news/ajout', function (req, res) {
   res.set('Content-Type','application/json');
    news.push({ "auteur" : "Albert Einstein", "texte": "Texte de Einstein"})
    
    
    //console.log(news);
    
    res.send('Got a PUT request at /news/ajout');
});


//obtenir les commentaires //à terminer
app.get('/news/:id/comments', function(req, res) {
   
  if(news.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Erreur 404: Pas de news correspondante à cette Id');
  }  
    var q = news[req.params.id];
    
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    res.json(q);
});


//ajout d'un commentaire //à terminer
app.put('/news/:d/comments/ajout', function (req, res) {
    news[1].commentaires.push(
        {"auteurCommentaire": "Toto",
         "commentaire": "Très bon ça !"            
        
  })
    /*res.send('Got a PUT request at /news/ajout');*/
});


//suppression d'un article spécifique
app.delete('/news/:id', function(req, res) {
    
        
    
    if(news.length <= req.params.id) {
        res.statusCode = 404;
        return res.send('Error 404: No news found');
    }  

    news.splice(req.params.id, 1);
    
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    res.json(true);
});



app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }

    res.status(404);
    //res.send(err.message || '** Une erreur 404 **');
    res.sendFile( __dirname + "/default.html" );
    
});



//---------------------------------------

function insertNew(objNew){
    mongodb.connect("http://localhost/AdneomNew", function(error, db) {
    if (error) return funcCallback(error);

        //insert ds la db  
        db.collection("news").insert(objNew, null, function (error, results) {
        if (error) throw error;

        console.log("Le document a bien été inséré");  

        //Close connection
        db.close();

        });
    });
}

function afficherAllNews(){
    console.log('coucou1');
    mongodb.connect("http://localhost:27017/AdneomNew", function(error, db) {
    if (error) return funcCallback(error);
        console.log('coucou2');
        //Afficher les news
        db.collection("news").find().toArray(function (error, results) {
            console.log('coucou3');
            if (error) throw error;

            return results;

            //Close connection
            db.close();
        });
    });   
}

function afficherNew(new_id){
    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("http://localhost/AdneomNew", function(error, db) {
        if (error) return funcCallback(error);

            //Afficher la new
            db.collection("news").find(objToFind).toArray(function(err, results){
            if (error) throw error;

            return results;

            //Close connection
            db.close();
        });
    });         
}

/*function updateNew(new_id,titre,lien){

    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("mongodb://localhost/AdneomNew", function(error, db) {
       
    });
}*/

function removeNew(new_id){

    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("mongodb://localhost/AdneomNew", function(error, db) {
        if (error) return funcCallback(error);

        db.collection("news").remove(objToFind, null, function(error, result) {
            if (error) throw error;   

            //Close connection
            db.close();
        });
    });
}

//insertNew(objNew);

//afficherNew(new_id);
//removeNew(new_id);