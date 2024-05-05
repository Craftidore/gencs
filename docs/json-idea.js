// Store things in JSON

{
    '_id' : 'whatever',
    "head": {
        "direction": "vertical",
        "subitems": [
            {
                'type': 'container',
                'direction': 'horizontal',
                'subitems': [
                    {
                        'type':'label',
                        'text':'Name:',
                        'size':'fit',
                    },
                    {
                        'type':'padding',
                        'size':'5%'
                    },
                    {
                        'type':'text',
                        'size':'auto'
                    }
                ]
            },
            {
                'type': 'container',
                'direction': 'horizontal',
                'subitems': [
                    {
                        'type':'label',
                        'text':'Level:',
                        'size':'fit'
                    },
                    {
                        'type':'text',
                        'size':'auto',
                    }
                ]
            }
        ]
    }
}

let characterData = {
    'template':'whatever',
    'privacy':'private',
    'data': [
        {
            'text':'Bob Marigold',
            'ref':'ldsajkflaskdjflsadjflajsd',
        }
    ]
}


/*

GET  /v1/templates
POST /v1/templates
GET  /v1/templates/templateid
POST /v1/templates/templateid
GET  /v1/characters
POST /v1/characters
GET  /v1/characters/characterid
POST /v1/characters/characterid




*/
