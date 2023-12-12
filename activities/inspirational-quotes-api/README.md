# Inspirational Quotes API

### I have a lot of inspirational quotes, and I want to share them with the world via an API.
### Desired features:
* Add an inspirational quote
* Update an inspirational quote
* get all of my quotes
* delete a quote
* get a random quote
* get one specific quote

### Nice-to-have:
* categories for inspirational quotes

### API Route to feature mapping
| Http Method | endpoint     | corresponding feature         |
| ----------- | ------------ | ----------------------------- |
| POST        | `/quote`     | Add an inspirational quote    |
| PUT         | `/quote/:id` | Update an inspirational quote |
| GET         | `/quotes`    | get all of my quotes          |
| GET         | `/quote/:id` | get one specific quote        |
| GET         | `/quote`     | get random quote              |
| DELETE      | `/quote/:id` | delete a quote                |