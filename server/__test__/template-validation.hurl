POST http://localhost:8001/api/v1/templates
Content-Type: application/json

{
    "name":"Perfectly fine template",
    "summary":"This should not error",
    "templateData": {
        "type":"container",
        "direction":"vertical",
        "sizeRatio":3,
        "children":[
            {
                "type":"number-input",
                "allowFloat": true,
                "defaultValue":4,
                "fontSize":"big",
                "id":"lj231ljasd"
            }
        ],
        "id":"1233241"
    }
}

HTTP 200
[Captures]
id: jsonpath "$.id"

# New request
GET http://localhost:8001/api/v1/templates/{{id}}
