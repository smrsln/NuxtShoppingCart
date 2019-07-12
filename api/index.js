const express = require("express")
const session = require("express-session")
const app = express()

app.get("/",(req,res) =>{
    console.log("Ürünler Gönderildi")
    res.status(200).json({
        products:[
            {id:1, title: "Keçi Peyniri", price: 10},
            {id:2, title: "Sele Zeytin", price: 15},
            {id:3, title: "Petek Balı", price: 40},
            {id:4, title: "Vişne Reçeli", price: 5},
            {id:5, title: "Danet Kangal Sucuk", price: 17},
            {id:6, title: "Kaymak", price: 20},
            {id:7, title: "Zeytin Ezmesi", price: 8}
        ]
    })
})

module.exports={
    path:"/api",
    handler: app
}