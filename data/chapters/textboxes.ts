// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterTextboxes: GuideSection = 
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
  }