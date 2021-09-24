Marketplace BFF
-
### Purpose
- This is the entry point for all the services that the UI needs
- Current Service Behind Gateway
    -  `catalog-gql` 
### Concerns
- Infrastructure concerns
    - The backing services should only be able to be accessed by the federated server
    - When going to create the federated schema if the service is unavailable or blocked by authentication
    then it won't be able to create the federated server
    - When a schema from a down stream service changes the federated schema is not updated. In order to see the change
    take effect you need to restart the gateway. 
    - If two downstream services try and implement the same type in their gql schema then the
    federated server will crash.
        - We can pull the most current gateway image and before pushing, run docker compose and inject the
        local service image. If it successfully spins up we know there aren't any breaking schema changes
- Authorization & Authentication
    - Authentication will happen at this level.
        - We will inspect the request when it comes in and look for an `access_token` in the cookie
        - Once we have validated the token we will decode it and get the users roles and pass those to down stream services
            - It is up to down stream services to define what endpoints need a specific role
    
### Running project
- Locally `nodemon` or `npm run build && npm run start`

### Testing 
- There isn't much by way of testing in this repo. It acts more so like a piece of infrastructure and doesn't 
have much of any logic in it. 
    
    