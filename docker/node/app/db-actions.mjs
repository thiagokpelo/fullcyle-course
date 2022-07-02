import {faker} from '@faker-js/faker'

export const sql = {
  getAll: 'SELECT * FROM people',
  saveOne: `INSERT INTO people (name) VALUES (?)`,
};

export const dbActions = (conn, sql, cb) => {
  conn.connect();

  try {
    conn.query(sql.saveOne, [faker.name.firstName()]);

    conn.query(sql.getAll, (err, res) => {
      cb(res)
      conn.end();
    });

  } catch (e) {
    console.log(chalk.red(e.stack))
  }
}
