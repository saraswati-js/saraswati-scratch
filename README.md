# `@saraswati-js/runtime`
This is the main app that I'm working from. It is `nextjs` powered. `React` is the primary rendering engine. `Markdown` is it's primary documentation solution.

This has no tests, it has no style guide (currently) and everything is a mess. This is currently a dumping ground until I get most of the features hammered out.

## A statically generated blog example using Next.js and mdx
1. Will define how this whole thing works.
    1. Then I break down each part into it's own packages.
1. Will eventually become the actual runner for an org's layouts and content

## Rationale for working this way
I find it much easier to build the app in it's totality[1] then port it over to it's own package. In that package I will, typically, do full documentation, tests and functionality. This makes it easier to separate out the code and how it works.

For instance I tested out each of the markdown utilities directly in this repo then moved them out to their own packages. I will continue to work this way. Will eventually do the same with the design and runner.

## Todo Topics
1. Upgrade to react 17
1. [`THEMES`]
    * Convert styles to use SASS instead of what currently exists
1. [`FRONTMATTER`]
    * Allow for the use of icons
      *  Shouldn't break if icon doesn't exist
    * Hero image
1. [`SIDEBAR`]
    * `For now ignore all projects/zones and don't add it to the URL`
    * Active url = active item
    * Get a better hashing algo for short strings (use for sharing)
        - https://github.com/bibig/node-shorthash
        - https://github.com/joakimbeng/short-hash/blob/master/src/index.js (hash-string)
        - http://sahatyalkabov.com/jsrecipes/#!/backend/generating-short-hashes
        - https://www.npmjs.com/package/string-hash
    * Would it make sense to have a gear icon?
        - To get git url
        - To view version link
        - Share link
    * How to handle version'd content?
1. [`DOCS`] Make sure sure to add
    * Hero image if exists. Will require work on the utilities
1. [`ZONES`] Add in [zones](https://github.com/vercel/next.js/tree/canary/examples/with-zones)
    * This is prolly how i'll do the project url
    * If it is then I need to figure out how to do the runner specifically for a zone
1. [`PLANTUML`]
    - To get to work:
        - `npm i metalsmith-plantuml`
        - `npm i plantuml` (just calls a jar, do myself)
        - `graphiz` → `brew install graphviz`
    - Write plugin to handle in-memory change
        - This will do it via base64 encryption
    - Write plugin to handle creating files and linking
1. [`PLUGINS`] Get some plugins in there and running
    * Code
    * Playgounds
    * [2] Plugin errors
1. [`RUNNER]
    - Might be a good idea to start considering the markdown runner
        - Works like babel/webpack. Uses plugins.
            - Either strings or remark (pre v13)

---
[1] Not completely but rather I put together something with the "the most complete" feature set that I'm thinking of which will often encompase the most important functionality. 
[2] Some unmet peer deps that I should look into maybe.

```
@saraswati-js/runner@1.0.1 /Users/alibresinn/Projects/saraswati/saraswati-scratch
├── UNMET PEER DEPENDENCY fibers@>= 3.1.0
├── UNMET PEER DEPENDENCY jquery@1.9.1 - 3
├── UNMET PEER DEPENDENCY node-sass@^4.0.0 || ^5.0.0
├── UNMET PEER DEPENDENCY popper.js@^1.16.1
├── UNMET PEER DEPENDENCY react@17.0.2
├── UNMET PEER DEPENDENCY react-dom@17.0.2
├─┬ rehype-katex@3.1.0  invalid
│ ├─┬ hast-util-to-text@2.0.1 
│ │ └── unist-util-find-after@3.0.0 
│ ├─┬ katex@0.12.0 
│ │ └── commander@2.20.3 
│ └─┬ rehype-parse@6.0.2 
│   ├─┬ hast-util-from-parse5@5.0.3 
│   │ └── hastscript@5.1.2 
│   └── parse5@5.1.1 
├── remark-math@3.0.1  invalid
└── UNMET PEER DEPENDENCY sass@^1.3.0
```

<!-- 

Based on: https://github.com/mikesmit/nextjs-blog-starter-mdx

 -->