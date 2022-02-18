> show dbs
Usuarios_go  0.000GB
admin        0.000GB
config       0.000GB
local        0.000GB
> use Usuarios_go
switched to db Usuarios_go

> show collections
informacion_del_cliente

db.informacion_del_cliente.insert({"id" : "1", "nombre" : "Denilson", "ciudad" : "Queretaro","Estado" : "Queretaro",
"pais" : "Mexico", "telefono" : "7555517185", "facebook" : "Denilson_Aldair", "instagram" : "xdaoox", "zipcode" : "70230"
})

db.informacion_del_cliente.insert({"id" : "2", "nombre" : "Antonio Najera", "ciudad" : "Tula","Estado" : "Hidalgo",
"pais" : "Mexico", "telefono" : "4921053091", "facebook" : "Tono Najera", "instagram" : "100jant", 
})

> db.informacion_del_cliente.find().pretty()
{
        "_id" : ObjectId("620556fbf70c9af8cb85697d"),
        "id" : "1",
        "nombre" : "Denilson",
        "ciudad" : "Queretaro",
        "Estado" : "Queretaro",
        "pais" : "Mexico",
        "telefono" : "7555517185",
        "facebook" : "Denilson_Aldair",
        "instagram" : "xdaoox",
        "zipcode" : "70230"
}

{ 
        "id": "2"
        "nombre": "Antonio Najera"
        "ciudad": "Tula"
        "estado": "Hidalgo"
        "pais": "Mexico"
        "telefono": "4921053091"
        "facebook": "Tono Najera"
        "instagram": "100jant"
}