const express = require('express');
const { renderListView } = require('./lib/render-list-view');
const { renderSplitView } = require('./lib/render-split-view');
const { renderTemplate } = require('./lib/render-template');
const { templateList } = require('./lib/template-list');
const { toEmail } = require('./lib/to-email');

const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  const templates = await templateList(__dirname);
  return res.send(renderListView(templates));
});

app.get('/templates/css-compare/:name', (req, res) => {
  return res.send(renderSplitView(req.params.name));
});

app.get('/templates/:name', async (req, res, next) => {
  const inlineCss = req.query.inline_css !== 'false';
  const { name } = req.params;
  const { from, to, subject, format } = req.query;
  const body = await renderTemplate(name, inlineCss);
  try {
    return res.send(
      format === 'mail' ? toEmail(from, to, subject, body) : body
    );
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => console.log(`Coquito app listening on port ${port}!`));
