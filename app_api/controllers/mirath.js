const helperModule = require('./shared-functions');
const Alwratha = require("../models/mirath/alwratha");

var alwratha = new Alwratha();
module.exports.model = alwratha;

const mirathRules = require("../models/mirath/rules");

module.exports.controllers = {
    readAlwrathaList: function(req, res){
        var alwrathaList = alwratha.getList();
        if(alwrathaList)
        {
            helperModule.sendJsonResponse(res, 200, alwrathaList);
        }
        else
        {
            helperModule.sendJsonResponse(res, 500, "No data was found");
        }     
    },

    addAlwrathaData: function(req, res){
        alwratha.data = req.body;
        helperModule.sendJsonResponse(res, 201, alwratha.data);
    },

    calculateMirath: function(req, res)
    {
        console.log(alwratha.hasDirectChild);
        for (var warith in alwratha.data) 
        {
            alwratha.data[warith].fortune.money = mirathRules[warith];
        }
        
        helperModule.sendJsonResponse(res, 200, alwratha.data);
    },
};


