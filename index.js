/**
 * Created by antoniohernandez on 10/14/16.
 */
var express = require('express')

var app = express()

app.get('/blogData', function(req, res) {
    res.json(
        {
            blogData: [
                {
                    title: 'Rhubarb: The Vegetable That Acts Like a fruit',
                    desc:"May is all about vegetables on bobbyflay.com and one of the most popular springtime vegetables ir rhubarb. That's right, I said vegetable. Did you know that rhubarb is actually a vegetable, not a fruit? <br><br> While rhubarb is typically treated like a fruit and most often shows up in desserts in this country, it is also very good in savory dishes too and when used in glazed and chutneys pairs really well with pork, lamb and chicken. But, since I could live on pastries (and often do) I love using rhubarb in a variety of desserts"

                },
                {
                    title: "Spice-Crusted Salmon: A Holiday Dinner That's As Impressive As It Is Quick",
                    desc:"Holiday season is well underway, and you know what that means: people are BUSY! With that in mind, I developed a festive recipe that's quick enough to serve on a weeknight (with some make-aheads), and beautiful and impressive enough to serve as the centerpiece for a holiday meal <br><br> We love to serve a whole side of fish -- it makes for a gorgeous presentation and it feeds a crowd. This one has a spice rub that does double duty, as seasoning for the slamon and as a coating for spiced nuts that get stirred into fluffy jasmine rice"


                }
            ] })
})

app.listen(8080)
