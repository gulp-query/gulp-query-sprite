const pkg = require('./package.json');
const path = require('path');

function jsonTextureTemplate(data) {
  let spriteObj = {};

  // Create frame data for each sprite.
  spriteObj.frames = {};

  data.sprites.forEach(function saveSprite (sprite) {
    let frameName;
    let entry = {
      frame: {
        x: sprite.x,
        y: sprite.y,
        w: sprite.width,
        h: sprite.height
      }
    };

    spriteObj.frames[sprite.name] = entry;
  });

  // Create the meta data.
  spriteObj.meta = {
    app: pkg.name,
    github: pkg.repository,
    version: pkg.version,
    image: data.spritesheet.image,
    scale: 1,
    size: {
      w: data.spritesheet.width,
      h: data.spritesheet.height
    }
  };

  return JSON.stringify(spriteObj, null, 4);
}

// Export our JSON texture template
module.exports = jsonTextureTemplate;