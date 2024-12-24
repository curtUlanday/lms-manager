# Question and Solution Learning Management App

[Strapi.io ](https://strapi.io/) was used to create this app. Admin or Learning Manager can create questions and manage file uploads here in this [app](https://prized-beauty-0d76e9d2d4.strapiapp.com/admin/auth/login) (Please send me an email to create an account) 

## Project Setup for local deployment
Prerequisite:
- NPM (9.6.4)
- Node 20.0.0

Run `yarn develop` to run the app locally.

## Data Model
Below is the data model for this app:
![Data Model](/public/docs/datamodel.png "Data Model")

## REST API Config
| Name        | Value       |
| ----------- | ----------- |
| BASE_URL      | https://prized-beauty-0d76e9d2d4.strapiapp.com       |
| API Token   | 1d1aa4d1276b5eb7e2ab9e4355449fa52e5b831bf46a3c7113410b0132668d3e4e80423bf8983714401ab55a4c84884c4c9d6db268b4761f9017df6625ca4fcddbadc695d70027cb126f87b209f7a2d4b9abfac031c23d31e491d5bb085998cc85c2ac9e076c945a51fe4bceb20519747f3454eddf403cb47c2ce988528af75e        |

Postman collection can be found [here](/public/docs/LMS.postman_collection.json) to test the API: 

Sample API Response: 
```json
[
    {
        "id": "crks1jgm780og325iin7z89s",
        "Question": "<p><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">In a town, there is a 4-acre park and a 60-acre residential area. The total number of street lamps in the town is 1,200. The equation 4x + 60y = 1,200 represents this situation. Which of the following is the best interpretation of x in this context?&nbsp;</span></span></p>",
        "CorrectAnswer": "15400",
        "Options": [
            "13000",
            "13400",
            "15400",
            "37400"
        ],
        "Steps": [
            {
                "Title": "Step 1: What result are we looking for?",
                "Result": "<p style=\"line-height:1.38;margin-bottom:12pt;margin-top:12pt;\" dir=\"ltr\"><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">We are looking for what “x” means in the equation...&nbsp;</span></span></p><figure class=\"image\"><img style=\"aspect-ratio:418/100;\" alt=\"Screenshot 2024-12-24 at 8.49.38 AM.png\" src=\"https://prized-beauty-0d76e9d2d4.media.strapiapp.com/Screenshot_2024_12_24_at_8_49_38_AM_48ca34316d.png\" width=\"418\" height=\"100\"></figure><p style=\"line-height:1.38;margin-bottom:12pt;margin-top:12pt;\" dir=\"ltr\"><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">This equation tells us the total number of street lamps in the town is equal to 1200.</span></span></p>",
                "ImageUrl": [
                    "https://prized-beauty-0d76e9d2d4.media.strapiapp.com/Screenshot_2024_12_24_at_8_49_38_AM_48ca34316d.png"
                ]
            },
            {
                "Title": "Step 2: How do we get that result?",
                "Result": "<p style=\"line-height:1.38;margin-bottom:12pt;margin-top:12pt;\" dir=\"ltr\"><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">We need to figure out the relationship between 4 and x, and understand the equation overall.</span></span></p><figure class=\"image\"><img alt=\"Screenshot 2024-12-24 at 8.49.49 AM.png\" src=\"https://prized-beauty-0d76e9d2d4.media.strapiapp.com/Screenshot_2024_12_24_at_8_49_49_AM_0af1a9c132.png\" srcset=\"https://prized-beauty-0d76e9d2d4.media.strapiapp.com/thumbnail_Screenshot_2024_12_24_at_8_49_49_AM_0af1a9c132.png 245w, https://prized-beauty-0d76e9d2d4.media.strapiapp.com/small_Screenshot_2024_12_24_at_8_49_49_AM_0af1a9c132.png 500w\" sizes=\"100vw\" width=\"500\"></figure><p style=\"line-height:1.38;margin-bottom:12pt;margin-top:12pt;\" dir=\"ltr\"><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">We are given the equation and told that the total number of street lamps in the town is 1,200.&nbsp;</span></span></p><p style=\"line-height:1.38;margin-bottom:12pt;margin-top:12pt;\" dir=\"ltr\"><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">The town is made up of a&nbsp;</span></span><span style=\"background-color:transparent;color:rgb(255,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"><strong>4-acre park</strong></span></span><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">, and a&nbsp;</span></span><span style=\"background-color:transparent;color:rgb(0,0,255);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"><strong>60-acre residential area</strong></span></span><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">.&nbsp;</span></span></p><p><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">To get the&nbsp;</span><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"><strong>total number of street lamps</strong></span><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">, we would need to add the&nbsp;</span></span><span style=\"background-color:transparent;color:rgb(255,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"><strong>total</strong></span></span><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> number of street lamps in the park and the&nbsp;</span></span><span style=\"background-color:transparent;color:rgb(0,0,255);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"><strong>total</strong></span></span><span style=\"background-color:transparent;color:rgb(0,0,0);font-family:Arial, sans-serif;font-size:11pt;\"><span style=\"font-style:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> number of street lamps in the residential area.</span></span></p>",
                "ImageUrl": [
                    "https://prized-beauty-0d76e9d2d4.media.strapiapp.com/Screenshot_2024_12_24_at_8_49_49_AM_0af1a9c132.png"
                ]
            }
        ],
        "ImageUrl": [
            "https://prized-beauty-0d76e9d2d4.media.strapiapp.com/Screenshot_2024_12_24_at_8_49_55_AM_2d5832096f.png"
        ]
    }
]