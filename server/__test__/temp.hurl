#POST http://localhost:8001/api/v1/templates
#Content-Type: application/json
#
#{
#    "name":"My First Template",
#    "templateData": {
#        "test":"test"
#    }
#}
#
# HTTP 200
# [Captures]
# template_id: jsonpath "$.id"
# 
# # GET template
# GET http://localhost:8001/api/v1/templates/{{template_id}}

# HTTP 200
# [Asserts]
# jsonpath "$.name" == "My First Template"
# 
# # Create Character
# POST http://localhost:8001/api/v1/characters
# Content-Type: application/json
# 
# {
#     "name":"My First Character",
#     "summary":"A test of character API",
#     "characterData": {
#         "test":"test"
#     },
#     "template":"{{template_id}}"
# }
# 
# HTTP 200
# [Captures]
# char_id: jsonpath "$.id"
# 
# # GET Character
# GET http://localhost:8001/api/v1/characters/{{char_id}}

POST http://localhost:8001/api/v1/templates
Content-Type: application/json

{
    "name":"Test Template",
    "summary":"Template for testing the GUI",
    "templateData": {
        "type": "container",
        "direction":"vertical",
        "sizeRatio": 1,
        "id": "Template Name",
        "children": [
            {
                "type": "container",
                "direction":"vertical",
                "sizeRatio": 1,
                "id": "Name Container",
                "children": [
                    {
                        "type": "label",
                        "textDecoration":"none",
                        "fontSize":"medium",
                        "sizeRatio":1,
                        "id": "Name Label"
                    },
                    {
                        "type": "text-input",
                        "defaultValue":"",
                        "fontSize":"medium",
                        "sizeRatio":1,
                        "id": "Name Input"
                    }
                ]
            },
            {
                "type": "container",
                "direction":"vertical",
                "sizeRatio": 1,
                "id": "Level Container",
                "children": [
                    {
                        "type": "label",
                        "textDecoration":"none",
                        "fontSize":"medium",
                        "sizeRatio":1,
                        "id": "Level Label"
                    },
                    {
                        "type": "text-input",
                        "defaultValue":"",
                        "fontSize":"medium",
                        "sizeRatio":1,
                        "id": "Level Input"
                    }
                ]
            }
        ]
    }
}

