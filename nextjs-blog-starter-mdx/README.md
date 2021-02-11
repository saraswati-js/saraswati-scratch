# A statically generated blog example using Next.js and mdx

So, what to do

Figure out proper solutions for this
1. `[IMG]` ~~Get the image API finished so that works correctly~~
1. `[IMP]` ~~Get imports to work~~
1. `[STC]` ~~Test the static-ness of this once it's been built.~~
1. `[PLG]` Get plugins to work
1. `[REG]` Reorg the code
1. `[TPL]` Figure out if I can make a template & layout functions or HoC components out of next.

## IMG
I will go forward with the solution that I put together before. I will use the markdown image mover that will take an image, move it to a directory in `public` and relink the markdown file. The only requirement here is that I need to be able to run it as a secondary process.

This will be the same exact solution for partials.

Only thing is to figure out how to not include things with backticks

Replace: 
```md
![image](./path/to/image.png)
```

Don't replace:
```md
`![image](./path/to/image.png)`
```

---

Second part is to determine how to handle `content path`. Makes most sense to be set in `next.config.js`:

```js  
env: {
  CONTENT_PATH: __dirname,
}
```

The post's file path (relative to `CONTENT_PATH`) should be added to the post config.


## PLG
* Math
* UML
* Code
* Playgounds


