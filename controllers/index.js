var fs = require('fs');
var express = require('express');
var path = require('path');
var filePath = path.join(__dirname, '../py/output');



exports.test = function(req,res,next) {
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    var array = []
    var array2 = []
      if (!err){
          var str1 = data.split('\n');
          var item = str1[0]
          //  console.log(JSON.stringify(item))
            if(item != "") {
            var i = item.split(';');
            i1 = i[0].replace(/ /g,"")
            console.log(JSON.stringify(i1))
            i2 = i[1].replace(/ /g,"")
            console.log(JSON.stringify(i2))

              i1 = i1.replace(/[\(\)']+/g,"")
             i2 = i2.replace(/[\(\)']+/g,"")

           i1 = i1.split(',');
           i2 = i2.split(',');
           console.log(JSON.stringify(i1))
           console.log(JSON.stringify(i2))



           for(var i = 0;i<i1.length;i++ ) {
             var x = [parseFloat(i1[i],10),parseFloat(i1[i+1],10)]
             array.push(x)
             i++
           }

           for(var j = 0;j<i2.length;j++ ) {
             var y = [parseFloat(i2[j],10),parseFloat(i2[j+1],10)]
             array2.push(y)
             j++
           }
              console.log(JSON.stringify(array))
              console.log(JSON.stringify(array2))

              res.render('index' , {polygon : array, guards : array2})



         }
       }


  });

}
