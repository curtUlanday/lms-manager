# Question & Solution Learning Management App and Match Invite System

[Strapi.io ](https://strapi.io/) was used to create this app. Admin or Learning Manager can create questions and manage file uploads here in this [app](https://prized-beauty-0d76e9d2d4.strapiapp.com/admin/auth/login) (Please send me an email to create an account)

Update: Added Match invite system where learners can create a friendly match

Please see [here](https://youtu.be/J1JylyzUA9E) the demo of Match Invite System

## Project Setup for local deployment

Prerequisite:

- NPM (9.6.4)
- Node 20.0.0

Run `yarn develop` to run the app locally.

## Data Model

Below is the data model for this app:

![Data Model](/public/docs/datamodel.png "Question and Solution Data Model")

![Data Model](/public/docs/match_datamodel.png "Match System Data Model")

## REST API Config


| Name      | Value                                                                                                                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BASE_URL  | https://prized-beauty-0d76e9d2d4.strapiapp.com                                                                                                                                                                                                                   |
| API Token | 1d1aa4d1276b5eb7e2ab9e4355449fa52e5b831bf46a3c7113410b0132668d3e4e80423bf8983714401ab55a4c84884c4c9d6db268b4761f9017df6625ca4fcddbadc695d70027cb126f87b209f7a2d4b9abfac031c23d31e491d5bb085998cc85c2ac9e076c945a51fe4bceb20519747f3454eddf403cb47c2ce988528af75e |

Postman collection can be found [here](/public/docs/LMS.postman_collection.json) to test the API:

### Generic Endpoints Question and Solution System

[Strapi.io ](https://strapi.io/) was used to create this app. Admin or Learning Manager can create questions and manage file uploads here in this [app](https://prized-beauty-0d76e9d2d4.strapiapp.com/admin/auth/login) (Please send me an email to create an account)

Update: Added Match invite system where learners can create a friendly match

Additional reference can be found [here](https://docs.strapi.io/dev-docs/api/rest#endpoints)

Collection Name: **Question**


| Method | URL                          | Description           |
| ------ | ---------------------------- | --------------------- |
| GET    | `/api/questions`             | Get list of questions |
| POST   | `/api/questions`             | Create question       |
| GET    | `/api/questions/:documentId` | Get Specific question |
| DELETE | `/api/questions/:documentId` | Delete a question     |
| PUT    | `/api/question/:documentId`  | Update a question     |

Collection Name: **Option**


| Method | URL                        | Description          |
| ------ | -------------------------- | -------------------- |
| GET    | `/api/options`             | Get list of options  |
| POST   | `/api/options`             | Create options       |
| GET    | `/api/options/:documentId` | Get Specific options |
| DELETE | `/api/options/:documentId` | Delete a options     |
| PUT    | `/api/options/:documentId` | Update a options     |

Collection Name: **Step**


| Method | URL                      | Description        |
| ------ | ------------------------ | ------------------ |
| GET    | `/api/steps`             | Get list of steps  |
| POST   | `/api/steps`             | Create steps       |
| GET    | `/api/steps/:documentId` | Get Specific steps |
| DELETE | `/api/steps/:documentId` | Delete a steps     |
| PUT    | `/api/steps/:documentId` | Update a steps     |

### 

### Generic Endpoints Match Invite System

Collection Name: Match


| Method | URL                       | Description                      |
| ------ | ------------------------- | -------------------------------- |
| GET    | `/api/matches`            | Get all list of matches          |
| POST   | `/api/matches`            | Create a match                   |
| GET    | `/api/matches:documentId` | Get specific match by documentId |
| PUT    | `/api/matches:documentId` | Update a match by documentId     |
| DELETE | `/api/matches:documentId` | Delete a match by documentId     |

Collection Name: Round


| Method | URL                      | Description                             |
| ------ | ------------------------ | --------------------------------------- |
| GET    | `/api/rounds`            | Get all list of rounds                  |
| POST   | `/api/rounds`            | Create a round                          |
| GET    | `/api/rounds:documentId` | Get specific round record by documentId |
| PUT    | `/api/rounds:documentId` | Update a round record by documentId     |
| DELETE | `/api/rounds:documentId` | Delete a round record by documentId     |

Collection Name: Player Answer Data


| Method | URL                       | Description                              |
| ------ | ------------------------- | ---------------------------------------- |
| GET    | `/api/players`            | Get all list of players                  |
| POST   | `/api/players`            | Create a players                         |
| GET    | `/api/players:documentId` | Get specific player record by documentId |
| PUT    | `/api/players:documentId` | Update a player record by documentId     |
| DELETE | `/api/players:documentId` | Delete a player record by documentId     |

## Sample Screenshots

Question Data Model
![All Questions](/public/docs/All_Question_List.png "All Question]")
![Question Info](/public/docs/Question_Info.png "Question Info]")

Option Data Model
![All Options](/public/docs/All_Option_List.png "All Options]")
![Question Info](/public/docs/Option_Info.png "Option Info]")

Step Data Model
![All Steps](/public/docs/All_Step_List.png "All Step]")
![Step Info](/public/docs/Step_Info.png "Step Info]")

Content and Media Manager
![Media Library](/public/docs/Media_Library.png "Media Library]")
