## gulp-query-sprite
Plugin for [gulp-query](https://github.com/gulp-query/gulp-query)

Do the sprites and get the final image with scss, css, json or other

Uses [spritesmith](https://www.npmjs.com/package/spritesmith),
[imagemin](https://www.npmjs.com/package/imagemin),
[pngquant](https://www.npmjs.com/package/imagemin-pngquant) for PNG and
[pngquant](https://www.npmjs.com/package/imagemin-mozjpeg) for JPEG

This plugin provides automatic create sprite and support file (css,scss,json and etc)

```
npm install gulp-query gulp-query-sprite
```

### Example
Paste the code into your `gulpfile.js` and configure it
```javascript
let build = require('gulp-query')
  , sprite = require('gulp-query-sprite')
;
build((query) => {
    query.plugins([sprite])
    
      .sprite("images_source/icons/*.png", {
        images: "images/",
        css: "css/"
      },'icons')
    

      .sprite([
        "images_source/watch/*.jpg",
        "images_source/auth/*.png"
      ], {
        images: "images/",
        css: "json/"
      }, {
        extension: "json",
        format: "json_texture"
      })

      // object
      .compress({
        name: 'any',
        from: [
          "images_source/watch/*.jpg",
          "images_source/auth/*.png"
        ],
        to: {
          images: "images/",
          css: "json/"
        }
      })
    ;
});
```
And feel the freedom
```
gulp
gulp --production // For production (minification)
gulp watch // Watching change
gulp sprite // Only for compress
gulp sprite:icons // Only for task with name icons
...
```

### Options
```javascript
.sprite({
    name: 'task_name', // For gulp sprite:task_name
    from: [
      "src/images/icons1/*.jpg",
      "src/images/icons2/*.png"
    ],
    to: {
      images: "images/",
      css: "scss/"
    },
    extension: "scss",
    format: "scss",
    padding: 1,
    algorithm: 'binary-tree', // top-down, left-right, diagonal, alt-diagonal
    png: {
      quality: '60-70',
      speed: 1
    },
    jpeg: {
      quality: 60,
    }
})
```
[About «format»](https://github.com/twolfson/spritesheet-templates#templates)

[About «algorithm»](https://github.com/twolfson/layout)