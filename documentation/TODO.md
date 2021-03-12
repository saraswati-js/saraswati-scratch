# Todos
- Add tests to everything. Jeez.
## `@saraswati-js/runtime`
- Do some design thinking on a potential runtime
- Needs to export a theme'd runtime that organizations can use
- Should require no extra configuration other than to add to a package + adding a script (eg: `"docs:dev": "saraswati-runtime"`)
- `@saraswati-js/runtime` should reload on changes to single files (code for api, markdown) and reload

## Scratch
## Blog
- Figure out if next.js can "chunk" react components
  - Might be best to do [`Multi Zone`](https://nextjs.org/docs/advanced-features/multi-zones)
    - Save time on compiling and pushing to, say, `S3`
- Update all packages
- Reorg code
  - ~~Move all code around so it's under `/src`~~
  - Move differing page components to proper directories
- Rename `./src/components/` to `./src/theme`
- Export the theme & all components to it's own package under `@saraswati-js/demo-content`
- Add more `remark` plugins
- Create sample layout
- Add more page types
- `/lib` should be our exportable (`@saraswati-js/runtime`)
- Figure out how to do components
- Figure out how to do API
- Figure out how to do Code docs (ex `ts-docs`)
- `frontmatter`
  - There is still an issue with no front matter, this needs to be fixed
  - Figure out `project`
  - Figure out `layout`
  - Figure out `git`
  - Figure out `previous` and `next` links
    - This should be done in the tree.
- Figure out logging and alerts
- Layouts based on runtime.
- Figure out zones

## Utilities
### `@saraswati-js/markdown-modifier`
- Move the credits document from the images folder to a top-level folder
- Republish so I don't keep having to fix that error
- Allow for `@import()` plugin

## Misc
- Exntention point to defined other sources
- Exntention point to convert so nextjs can statically make content
- 

