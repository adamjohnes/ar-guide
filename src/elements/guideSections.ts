import type { GuideSection } from "./types/GuideSection";

// Chapters
import { ChapterPageSetup } from "../../data/chapters/page-setup";
import { ChapterSections } from "../../data/chapters/sections";
import { ChapterConnections } from "../../data/chapters/connections";

export const guideSections: GuideSection[] = [
  ChapterPageSetup,
  ChapterSections,
  ChapterConnections,
  {
    id: 'parameters',
    path: '/guide/parameters',
    title: 'Parameters',
    description: 'Values passed into a report to make the output dynamic.',
    subsections: [
      {
        id: 'creating-parameters',
        title: 'Creating Parameters',
        description: 'Create parameters before referencing them in report queries or subreports.',
        keyPoints: [
          'Parameters are found under the Data tab.',
          'Use Add to create a new parameter.',
          'Most common edits are Name, Prompt, and Data Type.'
        ],
        images: [],
        examples: [
          'permitID',
          'caseID',
          'employeeID'
        ]
      },
      {
        id: 'available-values',
        title: 'Available Values',
        description: 'Available Values can provide a controlled list of parameter choices.',
        keyPoints: [
          'Use Value and Label fields for drop-down options.',
          'Only change Available Values when the report requires it.',
          'Unnecessary edits can cause unexpected parameter behavior.'
        ],
        images: [],
        examples: []
      }
    ]
  },
  {
    id: 'expressions',
    path: '/guide/expressions',
    title: 'Expressions',
    description: 'Report logic used for values, visibility, formatting, and calculated output.',
    subsections: [
      {
        id: 'expression-syntax',
        title: 'Expression Syntax',
        description: 'Expressions are wrapped in curly braces and can reference fields directly.',
        keyPoints: [
          'Wrap expressions in curly braces.',
          'Use expressions for calculated values.',
          'Use the expression editor from the small circle beside supported properties.'
        ],
        images: [],
        examples: [
          '{4 + 4}',
          '{IIF(employeeID = 100, False, True)}'
        ]
      },
      {
        id: 'formatted-text',
        title: 'Formatted Text',
        description: 'Formatted Text boxes are used when HTML-style content is needed.',
        keyPoints: [
          'Use Formatted Text when embedding HTML tags.',
          'Expressions can be placed inside formatted content.',
          'This is useful for letters, notices, and paragraph-style report text.'
        ],
        images: [],
        examples: [
          '<strong>{IIf(TERMS = NULL, "NO DATA", TERMS)}</strong>'
        ]
      }
    ]
  },
  {
    id: 'textboxes',
    path: '/guide/textboxes',
    title: 'Textboxes',
    description: 'Static text, database fields, and expression output inside a report.',
    subsections: [
      {
        id: 'textbox-values',
        title: 'Textbox Values',
        description: 'Textboxes can display static text or dynamic values returned from the database.',
        keyPoints: [
          'Use curly braces to display a database field.',
          'Textboxes can also display expression results.',
          'Make the textbox large enough for the rendered value.'
        ],
        images: [],
        examples: [
          '{employeeID}',
          '{4 + 4}'
        ]
      },
      {
        id: 'textbox-expressions',
        title: 'Textbox Expressions',
        description: 'Expressions can evaluate logic and return calculated values inside a textbox.',
        keyPoints: [
          'Wrap the full expression in one set of curly braces.',
          'Do not wrap inner field names in a second set of braces.',
          'The same expression style can be used in other report elements.'
        ],
        images: [],
        examples: [
          '{IIF(employeeID = 1883594, True, False)}'
        ]
      }
    ]
  },
  {
    id: 'tables',
    path: '/guide/tables',
    title: 'Tables',
    description: 'Repeating report structures for displaying larger sets of data.',
    subsections: [
      {
        id: 'table-structure',
        title: 'Table Structure',
        description: 'Tables are made up of headers, body rows, footers, and textbox cells.',
        keyPoints: [
          'A table is its own report element.',
          'Cells inside the table are usually textbox elements.',
          'Use the table handle to edit the table itself.'
        ],
        images: [],
        examples: []
      },
      {
        id: 'repeating-rows',
        title: 'Repeating Rows',
        description: 'Table body rows repeat for each record returned by the query.',
        keyPoints: [
          'Body rows repeat based on query results.',
          'A table can contain multiple body rows.',
          'Headers and footers do not repeat the same way as body rows.'
        ],
        images: [],
        examples: [
          '{employeeID}'
        ]
      }
    ]
  },
  {
    id: 'subreports',
    path: '/guide/subreports',
    title: 'Subreports',
    description: 'Reports embedded inside another report.',
    subsections: [
      {
        id: 'embedded-reports',
        title: 'Embedded Reports',
        description: 'Subreports allow one report to display another report inside it.',
        keyPoints: [
          'Subreports are separate reports embedded into a main report.',
          'Many report library subreports use .include in the report name.',
          'Subreport formatting can be sensitive to width and height settings.'
        ],
        images: [],
        examples: []
      },
      {
        id: 'subreport-parameters',
        title: 'Subreport Parameters',
        description: 'Main report values can be passed into subreport parameters.',
        keyPoints: [
          'A main report can pass values into a subreport.',
          'The subreport parameter must match the value it expects.',
          'This is commonly used for IDs shared between the main report and subreport.'
        ],
        images: [],
        examples: [
          'employeeID passed from the main report into the subreport'
        ]
      }
    ]
  },
];
