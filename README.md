# [Snkr Snake Game][game]

A [Phaser 3][phsr] game powered by [Gulp][gulp] and [Webpack][wbpk].

## Instructions for Developers

> NOTE: It is highly recommended that you have the latest [long-term support](https://nodejs.org/en/about/releases/) (LTS) release of Node.js installed to use this project.

1. Clone this repository and install the project dependencies using `npm install`.
2. Create and edit the .env file with the correct parameters for the database(port preferred to be 5000).
   (parameters look like:
   <br>DB_HOST=localhost
   <br>DB_USER=root
   <br>DB_PASS=
   <br>DB_NAME=snkr
   <br>PORT=5000
   )
3. The structure of the database has to be: 1 table named 'scores' and its fields: 'id'(auto increment), 'name'(varchar), score(int)
4. In the root folder, run `npm start`
5. Check the website, that's it!
