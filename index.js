var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Blog = mongoose.model('Blog',schema,'Blogs');

var bloger1 = {
    title: 'Sherlock',			
    author: 'Donal',						
    body: 'Contenido entretenido y de misterio',						
    comments: [
        { 
            body: 'Es agredable',
            date: new Date('2021,01,05')
        }
    ],
    date: new Date('1995,11,17'),
    hidden: false,
    meta: 23
}

Blog.create(bloger1, function(error){
    if(error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved Bloger!");
});