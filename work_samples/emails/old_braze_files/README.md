Simple express http server that renders liquid templates.  Seems fairly compatible with Braze's parser.  Also serves as a versioned backup repository for templates and content blocks that constitute our email designs.

# Usage

- Put Braze content blocks in the `content-blocks` dir.  Name them with the same name as they are called in Braze, and add a `.liquid` extension.
- Put Braze templates in the `templates` dir.  Name them as you wish, though try to use a similar name as they are called in Braze, and add a `.liquid` extension.
- run `npm run start`
-- By default, the server uses the `prod` Braze app group settings. To run with the
`dev` app group config use `npm run start:dev`
- Go to http://localhost:3001 .  This will show a list of templates found in the `templates` dir.  Clicking on one will take you to: `http://localhost:3001/templates/<name>`, and will attempt to render the template.
- When rendering, the server will inject any referenced content blocks (e.g. `{{content_blocks.${<name>}}}`). The `<name>` **must** match the name of the content block in the `content-blocks` dir.

# Send Template By Email

Requires `sendmail`. [Instructions for MacOS](https://medium.com/better-programming/how-to-send-mail-from-the-macos-terminal-dad1756b166f).

```
./bin/send-template-as-email.js <template name> <recipient email> [email subject]
```

```
./bin/send-template-as-email.js test-dn-153-simplified sample+1@waybetter.com 'Test V2'
```

# Custom Liquid Filters

Custom liquid filters are put in the `filters` folder. Currently, these are supported:
- [`url_param_escape`](https://shopify.dev/docs/themes/liquid/reference/filters/string-filters)

## Custom Liquid Tags

Custom liquid tags are put in the `tags` folder.  Currently, these are supported (at least partially):
- `connected_content`: uses `axios` to fetch the requested URL, resolving any variables in it.

## Email Design Versioning

Since Braze does not support versioning of its templates or content blocks, this module will double as a versioning/backup repo of these items that, together, constitute the whole of a specific email template design.  The tagging scheme is simple in that it denotes the email design number plus a simple version number, so email design 1 will be versioned as `ed1-v1`, `ed1-v2`, etc.  The `v` number is incremented whenever a change is requested for that design. Email design 2 would follow the convention: `ed2-v1`, `ed2-v2`, etc.

# Braze Content-block-based Email Template Design

Braze allows creation of email templates, and offers a "classic" (WYSIWIG) editor as well as an HTML editor.  The former is easier to use than the latter, but it is fairly limited, allowing simple formatting of text an addition to images. Because our emails' style follows branding and theming similar to the UX experience on our apps and web site, we rely on the HTML editor.

There are a few challenges that, together, make it difficult to manage email templates:

1. HTML email relies on HTML tables and other less modern approaches to styling, due to the need to work on multiple email clients, which may not support newer HTML standards.  For example, a simple HTML <button> is actually composed of an entire HTML table, with styling on the table, tr, and td elements. The markup on email templates is typically very verbose and hard to follow.

2. We based our original email template on a Mailchimp template. It has fairly elaborate styling for various screen sizes, as well as usage of "legacy" HTML styling (as described in #1). The downside is that no current employee understands the template well, and so it is hard to make changes to it.

3. The Braze HTML editor only seems to catch Liquid errors. It does not seem to catch HTML or CSS syntax errors, unlike a typical modern editor which will even highlight errors inline as you edit.

## Redefining How We Manage Templates

To remove or alleviate the issues above, I have created a new scheme to manage Braze templates, with the following goals:

1. Separate the design markup used to create templates from the content that needs to be added to the design to create a particular template.
2. Leverage a theming approach to automate variations in the template based on the particular product a given template is intende for.

## Design #1

The current email design, boringly named "Design #1", is a result of:

1. Dissecting the original Mailchimp-based template into its logical parts.
2. Defining requirements of how the design needs to change based on the product it is for.

### Usage

The simplest use case is to include these two content blocks, and then insert the custom content in between them, which will appear in the body of the template.

#### New Braze Template Example

```
{% assign theme = 'dietbet' %}
{% assign header_hero_image_url = 'https://appboy-images.com/appboy/communication/assets/image_assets/images/5bd0ead418bc0a3f46295790/original.jpg?1540418260' %}

{{content_blocks.${email-design-1-all-pre-content}}}

<p>body markup goes here</p>

{{content_blocks.${email-design-1-all-post-content}}}
```

| variable              | description                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| header_hero_image_url | Optional: include a hero image at the given URL, shown below the brand logo.                       |
| theme                 | must be one of `dietbet`, `runbet`, `stepbet`, or `waybetter`. Defaults to `waybetter` if not set. |

### Theme-based Logic

The `theme` variable triggers some Liquid template logic in the design which has the following effects:

1. Determines what logo is shown as the header image.
2. The color theme used for buttons and links.
3. The appropriate footer for the theme.  For example, whether to show a Facebook or Instagram page, Facebook group, etc.

## Template In-Depth



### Custom Styles

There is a waybetter styles content block, with some CSS classes you can use to style widgets to fit the WayBetter branding.  A few examples:

1. Plain Button
```
<table align="center" border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer wbButtonContainer">
    <tbody>
        <tr>
            <td class="mcnButtonContent wbButtonContent" valign="middle">
                <a class="mcnButton wbButton" href="https://waybetter.com/runbet/games" target="_self" title="">Play</a>
            </td>
        </tr>
    </tbody>
</table>
```

2. Inverted Button - Similar to #1, but has an additional `wbButtonContainerInverted` class in the <table>, and a `wbButtonInverted` in the <a> tag.

```
<table align="center" border="0" cellpadding="0" cellspacing="0"
    class="mcnButtonContentContainer wbButtonContainer wbButtonContainerInverted">
    <tbody>
        <tr>
            <td class="mcnButtonContent wbButtonContent" valign="middle">
                <a class="mcnButton wbButton wbButtonInverted" href="https://waybetter.com/runbet/games" target="_self"
                    title="">Inverted
                    Theme
                    Button</a>
            </td>
        </tr>
    </tbody>
</table>
```

3. "Team X" Brand Link - uses the `wbTeamSupportLink` style:

```
<p id="wbTeamSupportLink">
    Team StepBet<br />
    <a href="mailto:support@waybetter.com?subject={{product_name}}%20Question" target="_blank">support@waybetter.com</a>
</p>
```

4. Headings

Use `h1` or `h2` tags, which have been associated with styles to taylor the font to the theme.
