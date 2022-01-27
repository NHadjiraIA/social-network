const mongoose = require('mongoose')


mongoose
    .connect('mongodb+srv://Hadjira:ilyanna2021@cluster0.kytrp.mongodb.net/mern-project',
        {
             useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            // useFindAndModify: false,
        }
    )

    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB", err))
