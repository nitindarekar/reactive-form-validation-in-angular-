const { response } = require('express');
const express = require('express');

const Servers = express();

Servers.listen(3000, Marvellous);

function Marvellous(request, response)
{
    console.log("server connection is started successfully");
}

Servers.get('/getBatches',MarvellousBatches);

function MarvellousBatches(request, response)
{
    response.json({
        "BatchName" : "Python",
        "Fees" : 12500
    });
}

Servers.get('/getAdminDetails', MarvellousAdmin);

function MarvellousAdmin(request, response)
{
    response.json(
        {
            "Mobile" : "7020713938",
            "Mail" : "Admin@marvellousinforsystems.com"
        }
    )
}
