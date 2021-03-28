# A statically generated blog example using Next.js and mdx
1. Will define how this whole thing works.
  1. Then I break down each part into it's own packages.
1. Will eventually become the actual runner for an org's layouts and content

## Todo Topics
[`SIDEBAR`], [`PLUGINS`], [`THEMES`], [`ZONES`], [`JSONDB`], [`DOCS]

So, what to do next
1. [`SIDEBAR`] Get the sidebar working
    * ~~Drawing the sidebar is easy~~
    * The sidebar link needs to work
    * Allow for the use of icons
      *  Shouldn't break if icon doesn't exist
    * Active url = active item
    * Determine the urls
    * Determine how to do the project base part (subdomain, not subdomain)
    * Get a better hashing algo for short strings (use for sharing)
        - https://github.com/bibig/node-shorthash
        - https://github.com/joakimbeng/short-hash/blob/master/src/index.js (hash-string)
        - http://sahatyalkabov.com/jsrecipes/#!/backend/generating-short-hashes
        - https://www.npmjs.com/package/string-hash
    * Pull out tags to make a DB out of it
    * Determine the
    * Would it make sense to have a gear icon?
        - To get git url
        - To view different version
    * How to handle version'd content?
1. [`PLUGINS`] Get some plugins in there and running
    * Math
    * UML
    * Code
    * Playgounds
1. [`THEMES`] Put in a proper layout
    * Just buy one for now and figure it out later
    * Perhaps you can get Amanda to help
    * Do good styles
1. [`ZONES`] Add in [zones](https://github.com/vercel/next.js/tree/canary/examples/with-zones)
    * This is prolly how i'll do the project url
    * If it is then I need to figure out how to do the runner specifically for a zone
1. [`JSONDB`] Use a JSON db so I'm not writing directly to files
    * This way, hopefully, I can switch things out.
    * Examples
        * https://github.com/typicode/lowdb
        * https://www.npmjs.com/package/simple-json-db
        * https://www.npmjs.com/package/node-json-db
1. [`DOCS`] Make sure sure to add
    * hero image
    * sidebar icon
    * Make an async runner that will constantly update the dbs
        * sidebar db
        * tags db
        * project dbs
        * etc
