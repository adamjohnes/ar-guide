export type GuideSection = {
  id: string;
  path: string;
  title: string;
  description: string;
  subsections: GuideSubsection[];
};

export type GuideSubsection = {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  examples: string[];
};

export const guideSections: GuideSection[] = [
  {
    id: 'page-setup',
    path: '/guide/page-setup',
    title: 'Page Setup',
    description: 'Report-level layout and designer workspace settings for margins, snapping and other tools.',
    subsections: [
      {
        id: 'report-properties',
        title: 'Report Properties',
        description: 'Use the report view to access properties that apply to the report itself.',
        keyPoints: [
          'Click blank space outside the report body to access report-level properties.',
          'Use report properties for page-level configuration.',
          'Confirm the selected element before changing properties.'
        ],
        examples: []
      },
      {
        id: 'margins-size-orientation',
        title: 'Margins, Size, and Orientation',
        description: 'Control the printed or rendered page area before arranging report content.',
        keyPoints: [
          'Set margins before final positioning.',
          'Confirm page size before aligning report sections.',
          'Choose the correct orientation for the report output.'
        ],
        examples: []
      },
      {
        id: 'rulers-grid-snap',
        title: 'Rulers, Grid, and Snap',
        description: 'Use alignment tools to position report elements consistently.',
        keyPoints: [
          'Use the top and left rulers to adjust placement.',
          'Toggle ruler and snapping options from the designer controls.',
          'Use snap settings carefully when aligning dense report layouts.'
        ],
        examples: []
      },
      {
        id: 'ribbon-tools',
        title: 'Ribbon Tools',
        description: 'Use the designer ribbon to add report elements to the report body.',
        keyPoints: [
          'The ribbon contains the available report elements.',
          'Elements can be clicked or dragged onto the report body.',
          'Each selected element exposes its own properties.'
        ],
        examples: []
      }
    ]
  },
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
        examples: []
      }
    ]
  },
  {
    id: 'connections',
    path: '/guide/connections',
    title: 'Connections',
    description: 'How the web designer connects to data sources and data sets.',
    subsections: [
      {
        id: 'web-environment',
        title: 'Web Environment Connection',
        description: 'The web version uses the database associated with the current environment.',
        keyPoints: [
          'Manual server connection strings are usually not required in the web version.',
          'The environment determines the active database connection.',
          'Confirm the environment before testing report data.'
        ],
        examples: []
      },
      {
        id: 'manual-data-source',
        title: 'Manual Data Source Setup',
        description: 'Manual setup uses the Data panel to define connection fields when needed.',
        keyPoints: [
          'Use the Data icon on the right side of the designer.',
          'Add a data source from the Data Sources tab.',
          'Connection fields include name, provider, server, database, username, and password.'
        ],
        examples: []
      },
      {
        id: 'data-sets',
        title: 'Data Sets',
        description: 'Data sets define the SELECT statements and returned fields used by the report.',
        keyPoints: [
          'Click the plus icon beside a data source to add a query.',
          'Enter the SELECT statement in the query field.',
          'Returned fields appear under the Data Sets tab.'
        ],
        examples: [
          'SELECT * FROM TABLE_NAME WHERE ID = @parameterName'
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
        examples: [
          'employeeID passed from the main report into the subreport'
        ]
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
        examples: [
          '<strong>{IIf(TERMS = NULL, "NO DATA", TERMS)}</strong>'
        ]
      }
    ]
  },
  {
    id: 'sections',
    path: '/guide/sections',
    title: 'Sections',
    description: 'Organization tools for grouping and controlling related report content.',
    subsections: [
      {
        id: 'containers',
        title: 'Containers',
        description: 'Containers group related elements together inside a report.',
        keyPoints: [
          'Containers can help keep related elements together.',
          'Visibility settings on a container affect elements inside it.',
          'Use containers carefully because they can be harder to troubleshoot.'
        ],
        examples: []
      },
      {
        id: 'visibility',
        title: 'Visibility and Suppression',
        description: 'Visibility controls whether elements or groups of elements are rendered.',
        keyPoints: [
          'Hidden = False means the element is visible.',
          'Hidden = True means the element is hidden.',
          'Visibility expressions can show or hide content based on report data.'
        ],
        examples: [
          '{IIF(employeeID = 100, False, True)}'
        ]
      },
      {
        id: 'grouping',
        title: 'Grouping',
        description: 'Grouping organizes repeated content around a selected field or expression.',
        keyPoints: [
          'Groups can prevent duplicate displays of repeated values.',
          'Group expressions determine how records are organized.',
          'Grouping is useful when multiple rows belong to the same parent record.'
        ],
        examples: [
          'Group on CA_OBJECT_ID'
        ]
      }
    ]
  }
];
