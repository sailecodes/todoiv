# **TodoIV App**

### _Server-side_

- General logic
  - Authentication routes (`/api/v1/auth`)
    - Public routes
    - 3 routes:
      - Register (_POST_, `/api/v1/auth/register`)
        - Validation middleware
          - Must validate input values
            - i.e. first & last name, email, and password
              - Check if email already exists in the database
            - Use `express-validator` package for validation
              - Alternatively can use `mongoose` Schema validation
        - Controller
          - Store the password as a hashed string
            - Use `bcryptjs` package for hashing
      - Login (_POST_, `/api/v1/auth/login`)
        - Validation middleware
          - Must validate login values
            - i.e. email and password
            - Use `express-validator` package for validation
          - Controller
            - Check if user with email exists
            - Check password against user's password in db
            - Create a JWT and embed it in a http-cookie for authentication
      - Logout (_GET_, `/api/v1/auth/logout`)
        - Controller
          - Reset the http-cookie to clear the JWT
    - Todo routes (`/api/v1/todos`)
      - Restricted routes
        - Must pass a validation layer that verifies the JWT in the http-cookie
      - Further validation
        - After passing the authentication layer, the POST and PATCH routes must pass additional validations
      - 9 routes
        - Get all todos (_GET_, `/api/v1/todos`)
          - Retrieve only the todo items that the user has created
        - Create a todo (_POST_, `/api/v1/todos`)
          - Use the user id in the JWT as the value for createdBy
        - Get a todo (_GET_, `/api/v1/todos/:id`)
          - Validate that a todo item with id exists
          - Verify that the requesting user either created the todo item or is an admin
        - Update a todo (_PATCH_, `/api/v1/todos/:id`)
          - Validate that a todo item with id exists
          - Verify that the requesting user either created the todo item or is an admin
        - Delete a todo (_DELETE_, `/api/v1/todos/:id`)
          - Validate that a todo item with id exists
          - Verify that the requesting user either created the todo item or is an admin
        - Get finished todos (_GET_ `/api/v1/todos/finished`)
        - Get past deadline todos (_GET_ `/api/v1/todos/past-deadline`)
        - Get newest todo (_GET_ `/api/v1/todos/newest`)
        - Get coming todos (_GET_ `/api/v1/todos/coming`)
        - Get daily todos (_GET_ `/api/v1/todos/daily`)
        - Get weekly todos (_GET_ `/api/v1/todos/weekly`)
    - User routes (`/api/v1/users`)
      - Restricted routes
      - 1 route
        - Get user (_GET_, `/api/v1/users/user`)
          - Verify that user exists
          - Only return necessary information
            - e.g. Don't return database password
    - Admin routes (`/api/v1/admin`)
      - Restricted routes
        - Must pass a validation layer that verifies the user has role admin
      - 1 route
        - Get application stats (_GET_, `/api/v1/admin/application-stats`)

### _Client-side_

- General structure
  - Landing (`/`)
    - Can direct user to login or register
  - Login (`/login`)
    - Redirects user to dashboard
  - Register (`/register`)
    - Redirects user to login
  - Dashboard (`/dashboard`)
    - Children pages
      - Home (`/dashboard`)
        - Index page
        - Displays visual cards (see **Todo routes** above)
          - Finished todos
          - Past deadline (missed) todos
          - Newest todo
          - Coming todos
        - Displays interactive cards
          - Newest todo (see **visual cards** in **Home** page)
          - Coming todos (see **visual cards** in **Home** page)
          - Create todo
          - See daily todos
          - See all todos
      - Todos (`/dashboard/todos`)
        - Daily (`/dashboard/todos`)
          - Index page
        - All (`/dashboard/todos/all`)
        - Create (`/dashboard/todos/create`)
        - _**Add in a later version**_
          - Weekly (`/dashboard/todos/weekly`)
          - Monthly (`/dashboard/todos/monthly`)

### TODOs

- Client-side
  - `Medium`
    - Show number of todos on _Daily todos_ and _All todos_ pages
    - Implement _search_ functionality in _Daily todos_ and _All todos_
  - `Low`
    - Redesign _Dashboard_ side and top navigation bars
    - Redesign _Welcome_ pages, i.e. Landing, Login, and Register
    - Redesign _Create todo_ page
    - Implement error behavior where depending on the error a message is shown on the screen next to a label in a form
      - e.g. 'Password must be x characters long'
