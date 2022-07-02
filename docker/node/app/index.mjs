import http from 'http';
import chalk from "chalk";

import {bootstrap} from "./bootstrap.mjs";
import {connectionFactory} from "./connection.mjs";
import {dbActions, sql} from "./db-actions.mjs";

http
  .createServer(bootstrap(dbActions, connectionFactory, sql))
  .listen(3000, (err) => {
    if (err) throw err;

    console.log(chalk.green('Server running on port 3000'))
  });
