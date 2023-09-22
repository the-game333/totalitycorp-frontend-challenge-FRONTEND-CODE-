# Ecommerce Website -> Cama Store
## pages
* Home : ❓
    * Statis and Dynamic Data 
    * Top 2 Items clickable

* User
  * Login Page 
  * Register Page 

* Products❓
  * All Products on Home Page
  * Product Details
    * Description of the product
    * Add To Cart Button
    * Changing quantity, size options available    

* Rest api , Improving response  
## Backend Architecture:  MVC architecture , REST API
## Database : MongoDb,Mongoose
## Authentication : Json web token 
## 3rd party : 
        * Payment GateWay : Stripe
         
## Testing : Postman
## Frontend : React, Backend : Express
## Deployment : 
    * Backend : Render 
    * Frontend : Netlify
    * Codebase : Github
    * Database server : MongoDB Atlas 
 

## Steps for ordering a product from Ecommerce Website
* How to order a product
  
    * 1st step : click on 🔍 icon on item to proceed further 
      * Choose size, color, quantity of the item 
      * Click on "Add to Cart"
      * Click on Cart buttom at the top right to see the cart.
      * Click on checkout and make the payment with card Number -> 4242 4242 4242 4242 and any future expiration date and year and any 3 digit CVV number.
  

* Integrate our frontend to our backend -> 
    *  postman vs frontend
     * request button-> request || ui button press -> request + loader
     * response you will get    || response you will -> then you have do some change on ui
  *  React code explain  
     *  Step -1 add backend url as proxy to react package.json
     *  Step- 2 structuring 
        *  Top : Header -> Home,plan,login/ user profile
        *  Different Pages
           *  signup page, profile,login
     * AuthProvider:
       *  sync -> if you have a user or not on login and logout 
       * It also exposes you lossley coupled auth functions -> all them are together 
     



## Worked for better development
 * Rectifying status code error ->axios  ✔
 * Adding Products to your backend :(skeleteon code)
  1. We are using mvc architecture 
     1. api level -> main sub-route with your router
     2. create a productRouter -> remaining route & associating controller fns
     3. create controller functions -> 
        1. get,update,delete, 
        2. create getall
     4. create model -> db schema 
 * you first fill your model -> controller -> router
 * Usage : send data to a particular and following your schema  
 * Product Schema : category, size, price, color  
 * All Products Page creation
 * deployment 



## Deployment 
   * Backend: (Netlify) 
     * Implement cors : package cors 
     * convert your code to work with both process.env ans secrets.js
         *  put process.env.[private data key ] || require("../secrets)[private data]
         * Remove static port number : process.env.PORT || 3000
     
     * push the code to github
     *  Render
        *  -> signup -> create new app
        *  set Env variables
             * go to setting -> click on reveal config vars
             * enter all the secret key value pair
        *  -> go to deploy 
        *  -> Connect to a github repo -> enable automatic deploy->deploy branch
  * Frontend : Netlify
    * code : add full links when making api request to backend  
    * Netlify : 
          * signup -> click on add new site -> import an existing project 
          * authorize github -> choose your repo
    * deploy : warnings are converted to errors to prevent that 
          * in next popup -> in build command put : CI=false npm run build   
