

let store = {
    state: {
        groupList:{
            group: [
                {
                  id: "b785b820-10ec-4450-8449-08db2e8f03b3",
                  name: "Психология"
                },
                {
                  id: "5c74b5ba-da9e-423c-844a-08db2e8f03b3",
                  name: "Иностранные языки"
                },
                {
                  id: "3fe78a26-83e1-4170-844c-08db2e8f03b3",
                  name: "Программирование"
                },
                {
                  id: "466a37b3-2acf-4f4f-aed3-08db31fd15b0",
                  name: "Философия"
                }
              ]
        },
        course:[
            {
              id: "284218d8-ce17-4d6b-db5f-08db2e90e277",
              name: "Я полюбил публичные выступления",
              startYear: 2022,
              maximumStudentsCount: 100,
              remainingSlotsCount: 100,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "25739b12-f517-4bdd-db61-08db2e90e277",
              name: "Психология парных отношений: тренинг взаимопонимания",
              startYear: 2022,
              maximumStudentsCount: 200,
              remainingSlotsCount: 200,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "0157c4ca-9617-4c00-db62-08db2e90e277",
              name: "Кампусный курс - Социальная тревожность во время обучения в университете: что это такое и как с этим справляться?",
              startYear: 2022,
              maximumStudentsCount: 100,
              remainingSlotsCount: 100,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "c2145e52-6df0-4dc9-a533-08db31d28dd4",
              name: "string",
              startYear: 2029,
              maximumStudentsCount: -1,
              remainingSlotsCount: -1,
              status: "Created",
              semester: "Autumn"
            },
            {
              id: "0b9b361e-5c1e-4106-a534-08db31d28dd4",
              name: "string",
              startYear: 2029,
              maximumStudentsCount: -253,
              remainingSlotsCount: -253,
              status: "Created",
              semester: "Autumn"
            },
            {
              id: "9c4347d0-4e57-4846-975f-08db327c7f06",
              name: "Интересный курс",
              startYear: 2023,
              maximumStudentsCount: 50,
              remainingSlotsCount: 50,
              status: "Created",
              semester: "Autumn"
            }
          ]
    },
    
} 

// {
//   "id": "284218d8-ce17-4d6b-db5f-08db2e90e277",
//   "name": "Я полюбил публичные выступления",
//   "startYear": 2022,
//   "maximumStudentsCount": 100,
//   "studentsEnrolledCount": 2,
//   "studentsInQueueCount": 0,
//   "requirements": "<p><em>Уровень подготовки – любой. не люблю публичные выступления(((( +++++</em></p>\n",
//   "annotations": "<p><em>Цель: Повысить качество общения с публикой</em></p>\n",
//   "status": "Started",
//   "semester": "Spring",
//   "students": [
//     {
//       "id": "e3cb6b92-ec0c-42d0-c8de-08db33fba1b6",
//       "name": "Ситникова Владлена Михайловна",
//       "email": "vlada1111@mail.ru",
//       "status": "Accepted",
//       "midtermResult": null,
//       "finalResult": null
//     },
//     {
//       "id": "b4ee22ed-4873-4d59-c8dd-08db33fba1b6",
//       "name": "Обухов Олег Вадимович",
//       "email": "Oleg1978@mail.ru",
//       "status": "Accepted",
//       "midtermResult": null,
//       "finalResult": null
//     }
//   ],
//   "teachers": [
//     {
//       "name": "Первый Препод Курсович",
//       "email": "firstTeacher@tsu.ru",
//       "isMain": true
//     }
//   ],
//   "notifications": [
//     {
//       "text": "здесь был вася",
//       "isImportant": false
//     },
//     {
//       "text": "angular топ",
//       "isImportant": true
//     },
//     {
//       "text": "пиво топ",
//       "isImportant": false
//     },
//     {
//       "text": "rwezsrdtglh;",
//       "isImportant": false
//     }
//   ]
// }
export default store;

