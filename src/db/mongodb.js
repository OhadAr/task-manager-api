// /Users/דורון/mongodb/bin/mongod.exe --dbpath=/users/דורון/mongodb-data

// CRUD - create read update delete

// const { MongoClient, ObjectID } = require('mongodb')


// const connectionURL = process.env.MONGODB_URL
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if(error){
//         return console.log("Unable to connect to DB!")
//     }

//     const db = client.db(databaseName)

//     db.collection('users').findOne({ _id: new ObjectID("5e4098caa42ae404dc059f19") }, (error, user) => {
//         if(error){
//             return console.log('Unable to fetch!')
//         }
//         console.log(user)
//     })

//     db.collection('users').find({age: 27}).toArray((error, users) => {
//         if(error){
//             return console.log("Can't find users!")
//         }
//         console.log(users)
//     })
//     db.collection('users').find({age: 27}).count((error, count) => {
//         if(error){
//             return console.log("Can't find users!")
//         }
//         console.log(count)
//     })

//        db.collection('tasks').findOne({_id: new ObjectID("5e4098caa42ae404dc059f1e")}, (error, tasks) => {
//         if(error){
//             return console.log("Can't find users!")
//         }
//         console.log(tasks)
//     })
//     db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
//         if(error){
//             return console.log("Can't find users!")
//         }
//         tasks.forEach((task,index,arr,all_tasks)=>{
//             console.log(task.description, ' ', index)
//         })
//     })

//     db.collection('users').updateOne({
//         _id: new ObjectID('5e4098caa42ae404dc059f19')
//     }, {
//         $inc: {
//             age: 70
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//     db.collection('tasks').updateMany({
//         completed: false
//     }, {
//         $set: {
//             completed: true
//         }
//     }).then((result) => {
//         console.log(result.modifiedCount)
//     }).catch((error) => {
//         console.log(error)
//     })

//     // Delete Objects 
//     db.collection('tasks').deleteOne({
//         description: 'Stam3'
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })
