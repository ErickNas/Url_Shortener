const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const Schema = require('../models/schema');
const port = process.env.PORT || 3000;

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

function generateUrl() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

router.get('/', (req, res)=>{
    res.render('main');
});

router.get('/:shortened', async(req, res)=> {
    const newUrl = req.params.shortened;
  
    const result = await Schema.findOne({ where: { newUrl } });
    if (!result) return res.sendStatus(404);
  
    res.redirect(result.url);
});

router.get('/shortened/:id', async(req, res)=> {
    const id = req.params.id;
  
    const result = await Schema.findOne({ where: { id }});
    if (!result) return res.sendStatus(404);
    
    const formatedUrl = `localhost:${port}/${result.newUrl}`;
    res.render('stats', { values: formatedUrl});
});

router.get('/shortened/date/:date', async(req, res)=> {
    const date = req.params.date;
    const urlsAtDate = await Schema.findAll({where: { date } ,attributes: ['newUrl']});
    
    res.send(JSON.stringify(urlsAtDate, null, 4));
});

router.post('/shorten', async (req, res)=>{
    const url = req.body.url;
    if(url == ''){
        res.send(`URL inválida! 
        <br/><br/>
        <button><a href="/">Retornar a página principal</a></button>`);
    } else {
        const newUrl = generateUrl();
        const result = await Schema.create({
            url,
            newUrl
        });

        const formatedUrl = `localhost:${port}/${result.newUrl}`;
        res.render('stats', { values: formatedUrl});
    };  
});

module.exports = router;