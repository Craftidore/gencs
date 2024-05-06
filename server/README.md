# GenCS Backend

Implementation of REST API for GenCS.

## Endpoints

### Frontend

| Path | Behavior | Other Notes |
| ---- | -------- | ----------- |
| `/` | Home page | Shows recent characters and templates. |
| `/characters` | Your Characters page | |
| `/characters/new` | Create Character page | For selecting template + name;<br>goes to `/characters/:characterid/edit` afterward. |
| `/characters/:characterid` | View Character page | |
| `/characters/:characterid/edit` | Edit Character page | |
| `/templates/` | Your Templates page | |
| `/templates/:templateid` | View Template page | |
| `/templates/:templateid/edit` | Edit Template page | |

### Backend

| Request | Path | Behavior | Other Notes |
| ------- | ---- | -------- | ----------- |
| GET     | `/api/v1/characters` | Gets 20 characters | Name, id and template only. |
|         | `/api/v1/characters?count=30` | Gets 30 characters | See above. |
|         | `/api/v1/characters?start=21` | Gets 20 characters, starting at character 21 | For paging. See above. |
|         | `/api/v1/characters?start=31&count=30` | Gets 30 characters, starting at character 31 | For paging. See above. May want to add sort options as well. |
| POST    | `/api/v1/characters`  | Creates a new character | Name and template ref required. All other info optional. |
| GET     | `/api/v1/characters/:characterid` | Gets data for the `characterid` character | All info. |
| POST    | `/api/v1/characters/:characterid` | Update data for the `characterid` character | |
| DELETE  | `/api/v1/characters/:characterid` | Delete the `characterid` character. | Doesn't remove from database. |
| GET     | `/api/v1/templates` | Get 20 templates. | Template name & id only. |
|         | `/api/v1/templates?count=30` | Gets 30 templates. | See above. |
|         | `/api/v1/templates?start=21` | Gets 20 templates, starting at template 21. | For paging. See above. |
|         | `/api/v1/templates?start=31&count=30` | Gets 30 template, starting at template 31. | For paging. See above. May want to add sort options as well. |
| POST    | `/api/v1/templates` | Create new template. | |
| GET     | `/api/v1/templates/:templateid` | Gets `templateid` template. | All info. |
| POST    | `/api/v1/templates/:templateid` | Updates `templateid` template. | |
| DELETE  | `/api/v1/templates/:templateid` | Delete `templateid` template. | Doesn't remove from database. |


