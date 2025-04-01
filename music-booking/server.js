const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const fs = require('fs')
const path = require('path')
const UserRoutes = require('./app/routes/userRoutes')
const ArtistRoutes = require('./app/routes/artistRoutes')
const BookingRoutes = require('./app/routes/bookingRoutes')
const EventRoutes = require('./app/routes/eventRoutes')
const ErrorHandler = require('./app/middleware/ErrorHandler.middleware')
require('./app/database/Mongo.database')
 require('dotenv').config();


 app.use(express.json());


 
 app.use("/users", UserRoutes);
app.use("/artists", ArtistRoutes);
app.use("/events", BookingRoutes );
app.use("/bookings", EventRoutes);



//Error Handling 
ErrorHandler(app)
  
  
app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
  });
