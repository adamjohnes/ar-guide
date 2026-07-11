// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterTables: GuideSection = 
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
  }