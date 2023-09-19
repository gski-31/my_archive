module.exports.renderSplitView = name => {
  const html = `
    <html>
    <body>
    <table style="width: 100%; height:100%">
    <tbody>
    <tr>
      <th>
        Embedded &lt;style&gt;
      </th>
      <th>
        Inlined CSS
      </th>
    </tr>
    <tr>
      <td style="width: 50%; height: 100%">
        <iframe width="100%" height="100%" id="inline_css_frame" src="/templates/${name}?inline_css=true"></iframe>
      </td>
      <td style="width: 50%; height: 100%;">
        <iframe width="100%" height="100%" id="embedded_style_frame" src="/templates/${name}?inline_css=false"></iframe>
      </td>
    </tr>
    </body>
    </html>
  `;
  return html;
};
