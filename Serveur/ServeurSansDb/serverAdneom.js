var express = require('express');
var http = require('http');
var news = require("./news.js");
var app = express();
var server = http.createServer(app);


//EXPRESS :

app.listen(process.env.PORT || 8080);


//affichage de toutes les news
app.get('/', function(req, res) {
     
    console.log(news);
    
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    res.json(news);
    
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
   
    news.push({ "auteur" : "Albert Einstein", "texte": "Texte de Einstein"})
    
    res.set('Content-Type','application/json');
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
/*
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }

    res.status(404);
    //res.send(err.message || '** Une erreur 404 **');
    res.sendFile( __dirname + "/default.html" );
    
});*/

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
    return;
});