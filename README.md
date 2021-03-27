# My notes while learning
below are my notes while learning about webpack

# package.json
https://docs.npmjs.com/cli/v7/configuring-npm/package-json

# project commands
```bash
npm run build
npm start
```

# libraries
https://www.npmjs.com/package/font-awesome-webpack

# Using webpack-dev-middleware
The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000. We'll specify the port number later. The next step is setting up our custom express server.js.

# Adjusting Your Text Editor
### VSCode: settings.json
```json
{
  "editor.tabSize": 2,
  "prettier.tabWidth": 2,
  "prettier.endOfLine": "lf",
  "files.eol": "\n",
  "files.autoSave": "off"
}
```

# webpack
### index.js
import _ from "lodash";
import "./style.css";
import "./sass-style.scss";
import printMe from "./index/print.js";
import printIndex1 from "./index/index1.js";
import printIndex2 from "./index/index2.js";

From webpack build output:
cacheable modules 532 KiB
  ./src/index.js + 3 modules 943 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
"3 modules" counts for print.js + index*.js imports
