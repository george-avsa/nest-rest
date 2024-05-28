### Rest API for tasks

First Nest backend project. Contains CRUD actions with tasks.

##### Tools:
 - Framework: Nest (+ Typescript)
 - DB: PostgreSQL
 - ORM: Prisma

### API

All api is available by slug `api/`  
 - get all tasks `/tasks` (get)
 - get task by id `/tasks/:id` (get)
 - toggle task's completeness `/tasks/:id` (patch)
 - change task's name `/tasks/:id` (patch + body {name: string})
 - delete task `/tasks/:id` (delete)
