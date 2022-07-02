export const bootstrap = (dbActions, connectionFactory, sql) => (req, res) => {
  if (req.url != '/favicon.ico') {
    dbActions(connectionFactory(), sql, (results = []) => {
      res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
      res.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>NodeJS</title>
        </head>
        <body>
            <h1>Full Cycle Rocks!</h1>
            <ul>${results.map(item => `<li>${item.name}</li>`).join('\n')}</ul>
        </body>
        </html>
    `);
    });
  }
}
