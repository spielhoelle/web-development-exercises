const fse = require("fs-extra");
const path = require("path");
const pug = require("pug");
const glob = require("glob");
const files = glob.sync("**/*.pug", { cwd: `src/views/pages` });
fse.ensureDirSync("docs");

//That is the dynamic data that will be available in the pug 
const posts = require('./src/data/posts')

files.forEach((file, i) => {
  const fileData = path.parse(file);
  console.log(`Generated: docs/${fileData.name}.html`);
  return fse.writeFile(
    `docs/${fileData.name}.html`,
    //here you pass possts to the pages. index.pug requires posts.pug which will loop over those posts
    pug.renderFile(`src/views/pages/${fileData.base}`, { posts })
  );
});
fse.copy(`src/assets`, `docs/assets`);