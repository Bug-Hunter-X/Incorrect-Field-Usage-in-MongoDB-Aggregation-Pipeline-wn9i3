```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$field", sum: {$sum: '$value'}}}, //Correct: Use $value correctly
  {$sort: {sum: -1}}
])
```