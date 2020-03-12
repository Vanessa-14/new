const alert = require('../models/Alerts');

const alertController = {};


// Get current date for status
let hoy = new Date();
let dd = hoy.getDate();
let mm = hoy.getMonth()+1;
let yyyy = hoy.getFullYear();
let hr = hoy.getHours();
let min = hoy.getMinutes();

// let fulldate = dd + '/' + mm + '/' + yyyy ;

// /GET all alerts

alertController.getAlerts = async (req, res) =>{
   const alerts =  await alert.find();
   res.json(alerts);
} 
// /GET only one alert
alertController.getAlert = async (req , res) =>{
    const getUsAlerts = await alert.findById(req.params.id);
    res.json(getUsAlerts);
}
// /POST new alert
alertController.createAlert = async (req, res) => {
    const newAlert = new alert({
        matricula: req.body.matricula,
        student_name: req.body.student_name,
        educational_program: req.body.educational_program,
        incidence: req.body.incidence,
        tracing: req.body.tracing,
        // date: fulldate
    });
    await newAlert.save();
    res.json({
        status: "Alert saved"
    });
}
// /PUT update user
alertController.editAlert = async (req, res) =>{
    const {id} = req.params;
    const oneAlert = {
        matricula: req.body.matricula,
        student_name: req.body.student_name,
        educational_program: req.body.educational_program,
        incidence: req.body.incidence,
        tracing:  req.body.tracing
    };
    await alert.findByIdAndUpdate(id, {$set: oneAlert}, {new:true} );
    res.json({
        status: "Alert Updated"
    })
}

// /DELETE user
alertController.deleteAlert = async (req, res) =>{
    await alert.findByIdAndRemove(req.params.id);
    res.json({
        status: "Alert Deleted"
    })
}


 
module.exports = alertController;