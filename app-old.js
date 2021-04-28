const http = require('http');

http.createServer((req , res)=>{



    //res.setHeader('Content-Disposition' , 'attachment; filename = lista.cvs'); 
   // res.writeHead(200 , {'Content-Type': 'application/cvs'}); para hacer descargas
    
    res.write('hola mundo');
   /* res.write('1 , Camila\n');
    res.write('2 , Luis\n');
    res.write('3 , Juan\n');
    res.write('4 , Pedro\n');*/


    res.end();
})
.listen(8080);

console.log('Escuchando el purto' , 8080);