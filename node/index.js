const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5000;
// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mooongose connection 
mongoose.connect('mongodb://localhost:27017/groupClients',
    () => {
        console.log("DB connected");
    }
);
mongoose.connection.on('error', (err) => {
    console.log(err)
});

//ROUTES 
app.use('/renewlsClinet', require('./Routes/renewlsClinet'));
app.use('/renewedData', require('./Routes/renewedClients'));
app.use('/activeData', require('./Routes/activeClinets'));
app.use('/allClinets', require('./Routes/allClinets'));
app.use('/expriryClinets', require('./Routes/expriryClinets'));
app.use('/ptClients', require('./Routes/ptClients'));
app.use('/dietNutricationCilents', require('./Routes/dietNutricationCilents'));
app.use('/teacherTraningCilents', require('./Routes/teacherTraningCilents'));
app.use('/groupTranings', require('./Routes/groupTranings'));
app.use('/allBatches', require('./Routes/allBatches'));
app.use('/referrers', require('./Routes/referrers'));
app.use('/irregularMembers', require('./Routes/irregularMembers'));

app.listen(5000, function () {
    console.log('listening on port', port);
})