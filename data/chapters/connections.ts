// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterConnections: GuideSection = 
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
        images: [],
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
        images: [],
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
        images: [],
        examples: [
          'SELECT * FROM TABLE_NAME WHERE ID = @parameterName'
        ]
      }
    ]
  }