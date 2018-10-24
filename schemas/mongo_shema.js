const userValidator = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'phone', 'external', 'active'],
            properties: {
                email: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                },
                phone: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                },
                external: {
                    bsonType: 'boolean',
                    description: 'must be a boolean and is required'
                },
                active: {
                    bsonType: 'boolean',
                    description: 'must be a boolean and is required. Auto true if exteral=false on creation'
                },
                fname: {
                    bsonType: 'string',
                    description: 'must be a String, only required if external'
                },
                lname: {
                    bsonType: 'string',
                    description: 'must be a String, only required if external'
                }
            }
        }
    }
}

const equipmentValidator = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['serial', 'description', 'status', 'attributes', 'tags'],
            properties: {
                serial: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                },
                description: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                },
                status: {
                    enum: ['ok', 'broken'],
                    description: 'can only be one of the enum values and is required'
                },
                attributes: {
                    bsonType: 'object',
                    description: 'object of attributes, is required'
                },
                tags: {
                    bsonType:   'array',
                    items: {
                        bsonType: 'string',
                    }
                }
            }
        }
    }
}

const reservationValidator = {

}