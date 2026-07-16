import type { GuideSection } from "../../src/elements/types/GuideSection";

import { formattedTextboxLink } from "../../src/elements/types/Jumplink";
import { formattedTextboxHTMLImage, formattedTextboxCSSImage } from "../../src/elements/imageExports/textboxes";

export const ChapterTextboxes: GuideSection = {
  id: 'textboxes',
  path: '/guide/textboxes',
  title: 'Textboxes',
  description: `<strong>Textboxes</strong> are the primary report elements used to display written information. They can contain static labels, database fields, report parameters, expression results, or a combination of all of this content together.

  In addition to displaying values, textboxes provide formatting and layout settings in the properties tab that control the font, color, alignment, spacing and background. Expressions may also be applied to many of these properties to change how the textbox appears or behaves when the report runs.

  A standard textbox applies the same formatting to all of its content. So, when individual words or values require different formatting, either create multiple textbox elements or look into using ${formattedTextboxLink}.`,
  subsections: [
    {
      id: 'textboxes',
      title: 'Textboxes',
      description: `Textboxes can be added from the report toolbox and placed directly on the report page or inside another report element, such as a table cell.

      Static text can be entered directly into the textbox. This is useful for report titles, field labels, instructions, and other content that does not change when the report runs.

      To display a database field, place the field name inside curly braces. When the textbox exists inside a repeating table detail row, ActiveReports evaluates the field for each record returned by the table's data set.

      Textboxes may also contain expressions. These expressions can perform calculations, combine multiple values, return conditional text, or reference report parameters.`,
      keyPoints: [
        `Standard textbox formatting applies to all content contained within the textbox.`,
      ],
      images: [],
      examples: [
        `Static and Dynamic Content:
Employee ID: {employeeID}`,

        `Report Parameter:
{@PermitId}`,

        `Expression Result:
{FirstName + " " + LastName}`,

        `Conditional Text:
{IIF(employeeID Is Null, "Not Assigned", employeeID)}`
      ]
    },
    {
      id: 'textbox-sizing',
      title: 'Textbox Sizing and Content',
      description: `A textbox has a defined width and height on the report design surface, but its final content may be longer or shorter than expected when the report runs. ActiveReports provides several properties that determine how the textbox responds to these differences.

      The <strong>Can Grow</strong> property allows the textbox to increase its height when the rendered value requires additional lines. This is particularly useful for descriptions, notes, addresses, comments, and other fields whose length may vary between records.

      The <strong>Can Shrink</strong> property allows the textbox to reduce its height when its content does not require all of the space assigned at design time. This can help prevent unnecessary blank space, although it should be used carefully when several report elements depend on a consistent layout.

      Text wrapping, padding, horizontal alignment, and vertical alignment also affect the available space. A textbox may appear large enough on the design surface but still clip its content after padding and font sizing are applied.`,
      keyPoints: [],
      images: [],
      examples: []
    },
    {
      id: 'formatted-textbox',
      title: 'Formatted Textbox',
      description: `A <strong>Formatted Textbox</strong> is used when different portions of the same content require different formatting. Unlike a standard textbox, it can display supported HTML so that individual words, paragraphs, links, and other elements can have their own styles.

      HTML is entered through the Formatted Textbox's Html property located at:
      [<em>Formatted Text → Content → Html</em>]. 
      
      The complete HTML value should be enclosed in opening and closing <strong>&lt;body&gt;</strong> tags.

      Formatted Textboxes support many HTML tags and CSS properties, but they should not be treated as complete web pages. Unsupported HTML or CSS may be ignored when the report is rendered or exported. Keep the markup relatively simple and preview the report in every required output format.
      
      <strong>View the images to see which HTML/CSS elements are supported and their use cases.</strong>
      
      `,
      keyPoints: [
        `Wrap the complete HTML value in opening and closing body tags.`,
        `Keep the HTML and CSS relatively simple because unsupported formatting may be ignored.`
      ],
      images: [formattedTextboxHTMLImage, formattedTextboxCSSImage],
      examples: [
`HYPERLINK EXAMPLE:
<body>
  <a href="https://example.com">Example Link</a>
</body>`,
`<body>
  <p>
    This sentence contains
    <strong>bold text</strong>,
    <em>italicized text</em>, and
    <u>underlined text</u>.
  </p>
</body>`,
`LIST EXAMPLE:
<body>
  <p><strong>Required Information:</strong></p>

  <ul>
    <li>Permit ID</li>
    <li>Applicant name</li>
    <li>Property address</li>
  </ul>
</body>`,
  `CSS EXAMPLE:
<body style="font-family: Arial; font-size: 10pt; color: #000000;">
  <p style="text-align: center; font-weight: bold;">
    Permit Information
  </p>

  <p>
    This contains
    <p style="color: red; text-decoration: underline;">
      important information
    </p>.
  </p>
</body>`
      ]
    }
  ]
};