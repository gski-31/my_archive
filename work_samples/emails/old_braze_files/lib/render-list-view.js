module.exports.renderListView = templates => `
    <html>
    <ul>
    ${templates
      .map(
        template =>
          `<li>${template} - <a href="/templates/${template}">view</a> - <a href="/templates/css-compare/${template}">css compare</a></li>`
      )
      .join('\n')}
    </ul>
    </html>
  `;
