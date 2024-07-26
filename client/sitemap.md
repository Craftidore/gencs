Things every page should have:
- navbar (with homepage, characters, and templates)
- footer (with /about and /pricacy links)


- Home Page `/`
- Characters Page: `/characters`
    - Create Character button: `/characters/new`
        - Has a pick-template dialogue with name
        - API call to save in database, redirect based upon the ID
    - List of all characters
    - Characters: `/characters/:characterid`
    - Characters: `/characters/:characterid/edit`
- Templates Page
    - Create Character button: `/characters/new`
        - Has name dialogue
        - API call to save in database, redirect based upon the ID
    - List of all templates
    - Templates: `/templates/:characterid`
    - Templates: `/templates/:characterid/edit`
- About `/about`
- Privacy `/privacy`

