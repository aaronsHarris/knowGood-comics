

## KnowGOOD comics
--- 


### Project Description
---
This application will help the end user look up fun facts about different comic book characters using the Super Hero API

## API and Data Sample
-------
Comic Vine API:
https://comicvine.gamespot.com/api/

```"name": "@Blaze-of-Glory ",
            "origin": {
                "api_detail_url": "https://comicvine.gamespot.com/api/origin/4030-3/",
                "id": 3,
                "name": "Alien"
            },
            "publisher": {
                "api_detail_url": "https://comicvine.gamespot.com/api/publisher/4010-10/",
                "id": 10,
                "name": "DC Comics"
            },
            "real_name": null,
            "site_detail_url": "https://comicvine.gamespot.com/blaze-of-glory/4005-160230/"
        },
        
  ```


## Wireframes
-------
https://wireframe.cc/pro/pp/69f6ae871467578
 
![wire frame](https://res.cloudinary.com/dbdrox2p9/image/upload/v1630329751/Homepage_mp2qjk.png)

### MVP/PostMVP

------- 

#### MVP 


- Fecth data from the Super Hero API
- Input favorite characters from comic univeres
- Provide description and image of current result 
- App has responsive design for mobile

#### PostMVP  

- Add possible local stores for current result
- Use local storage to save user favorites or to manage your collection
- make a fun vs card game

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 27-29| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Aug 30| Project Approval | Incomplete
|Aug 30| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Aug 31| Pseudocode / actual code | Incomplete
|Sept 1| Initial Clickable Model  | Incomplete
|Sept 2| MVP | Incomplete
|Sept 3| Presentations | Incomplete

## Priority Matrix

![priority matrix](https://res.cloudinary.com/dbdrox2p9/image/upload/v1630332411/Screen_Shot_2021-08-30_at_9.04.31_AM_fv1t9w.png)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 4hrs| 6hrs | 6hrs |
| fetching data | H | 3hrs| 4hrs | 4hrs|
| js functions | H | 3hrs| 4hrs | 4hrs |
| js dom manipulation | H | 3hrs| 6hrs | 6hrs|
| structuring HTML| H | 3hrs| 1hr | 1hr |
|CSS for desktop| H | 5hrs| 6hrs | 6hrs |
|CSS for responsive| H | 4hrs| 1hr | 1hr |
| errors | H | 4hrs| 8hrs | 8hrs |
| post mvp | H | 4hrs| 0 | 0 |
| Total | H | 40hrs | 36hrs |36hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
async function fetchData(typeInput) {
  try {

    let res = await axios.get(`${corsAnywhere}${url}${typeInput}`)
    let charArr = res.data.results
    removeOldContent()
    charArr.forEach((Obj) => {
      console.log(Obj)
      showCharacter(Obj)
    })
  } catch (error) {
    console.log("error")
  }
}
```

## Change Log
- Ive changed the direction of the project
- The API only give you back a small amount of data compared to what the documentation says.
- I changed the API to better suit the project
- i changed the event listener to a keyup 
