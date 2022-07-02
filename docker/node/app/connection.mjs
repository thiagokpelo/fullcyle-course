import mysql from "mysql";

export const connectionFactory = () => {
  return mysql.createConnection({
    host: 'db',
    user: 'root',
    port: 3306,
    password: 'senhaforte',
    database: 'nodedb',
  });
}
