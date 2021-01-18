
const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelper')
const Campground = require('../models/campground')
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    userCreatedIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("mongo connnection open")
    }).catch(() => {
        console.log('oh no mongo error')
        console.log(err)
    })
const sample = array => array[Math.floor(Math.random() * array.length)]
const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 100; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        
        const camp = new Campground({
            author: "5fff3b8a78b1ffe332f711d8",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://rockmont.com/wp-content/uploads/2019/03/aerial-3-540x400.jpg',
                    filename: 'image1buufdfd'
                },
                {
                    url: 'https://www.visitarizona.com/imager/s3_us-west-1_amazonaws_com/aot-2020/images/landmarks/z1eafi5tjiqhxesuprw9_d2dabcf721a0c19b2d05d6b7bbe9ce3f.jpg',
                    filename: 'image2lalalala'
                }],
            geometry:{
                type:"Point",
                coordinates:[cities[random1000].longitude, cities[random1000].latitude]
            },
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus esse suscipit incidunt cum similique eum quia tempore architecto ad illo quis fugiat unde, sequi sit debitis distinctio dolores quo pariatur!',
            price: price
        })
        
        await camp.save()
    }

}
seedDB().then(() => {
    mongoose.connection.close()
});