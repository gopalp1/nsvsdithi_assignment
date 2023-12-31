export const drug2 = 
    {
        "fields": [
          {
            "label": "Date of Birth (YYYY-MM-DD)",
            "key": "birthday",
            "isRequired": true,
            "order": 1,
            "isReadonly": false,
            "type": "date"
          },
          {
            "label": "Sex",
            "items": [
              {
                "value": "male",
                "text": "Male"
              },
              {
                "value": "female",
                "text": "Female"
              }
            ],
            "key": "sex",
            "isRequired": true,
            "order": 2,
            "isReadonly": false,
            "type": "dropdown"
          },
          {
            "label": "Weight",
            "key": "weight",
            "isRequired": true,
            "order": 3,
            "unit": "kg",
            "isReadonly": false,
            "type": "number"
          }
        ]
      }
