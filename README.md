# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect field usage within the `$group` stage.

The bug arises from an incorrect reference to fields within the `$group` stage which results in unexpected sum values.

The solution shows the correct way to access and use fields in `$group` operations for accurate aggregation.

## Bug Description
The initial aggregation pipeline attempts to sum values using an incorrect field name within the `$group` operator, leading to inaccurate results. 

## Solution
The corrected pipeline uses the proper field names within the `$group` stage, which will give you accurate sums as desired.