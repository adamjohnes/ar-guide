import type { GuideSection } from "../../src/elements/types/GuideSection";

import { parametersLink } from "../../src/elements/types/Jumplink";

import { dataSourceLocationImage, 
        dataSourceConfigImage,
        dataSetButtonImage,
        dataSetInterfaceImage_1,
        dataSetInterfaceImage_2 ,
        multipleDataSetsImage
      } from "../../src/elements/imageExports/connections";

export const ChapterConnections: GuideSection = 
{
    id: 'connections',
    path: '/guide/connections',
    title: 'Connections',
    description: `<strong>Connections</strong> determine how ActiveReports retrieves the information used to populate a report. Before fields can be placed into textboxes, tables, or other report elements, the report must have access to both a data source and at least one data set.

    A <strong>data source</strong> defines where the report's data comes from. This includes the database connection and related information such as the provider, server, database, and authentication settings. In the ActiveReports web designer, this connection is generally inherited from the current Cityworks environment.

    A <strong>data set</strong> defines the specific information retrieved from a data source. It contains the SQL query, query parameters, and returned database fields that will be available to the report. A single data source may contain multiple data sets, allowing one report to retrieve different groups of related information through separate queries.

    Once a data set has been created and its query has been validated, the returned fields become available in the designer. These fields can then be used throughout the report to display database values, build expressions, filter content, and control report behavior.`,
    subsections: [
      {
        id: 'data-sources',
        title: 'Data Source Configuration',
        description: 'The web version uses the database associated with the current environment. The configuration process is fairly straightforward and simple. Ensure the <strong>Test Connection</strong> button is pressed to proceed with the data connection process.',
        keyPoints: [
          'Manual server connection strings are usually not required in the web version.',
          `Data sources and data sets extend across the entire report, meaning all continuous sections share the same data locations. Thus, it would make no difference if you previewed the report from the first section or the last section.`
        ],
        images: [dataSourceLocationImage, dataSourceConfigImage],
        examples: []
      },
      // {
      //   id: 'manual-data-source',
      //   title: 'Manual Data Source Setup',
      //   description: 'Manual setup uses the Data panel to define connection fields when needed.',
      //   keyPoints: [
      //     'Use the Data icon on the right side of the designer.',
      //     'Add a data source from the Data Sources tab.',
      //     'Connection fields include name, provider, server, database, username, and password.'
      //   ],
      //   images: [],
      //   examples: []
      // },
      {
        id: 'data-sets',
        title: 'Data Sets',
        description: `Data sets define the SELECT statements and returned fields used by the report. It is possible to maintain multiple data sets with different queries; however, this requires the report elements to reference the data fields with an object reference first. Report parameters may also be used inside of the queries to generate data specific to that parameter's value. 
        
        For more on parameters, see: ${parametersLink}.`,
        keyPoints: [
          'Click the plus icon beside a data source to add a query.',
          'It is recommended to rename data sets, particularly so if the report consists of more than one data set, this allows an easier distinction among the data.'
        ],
        images: [dataSetButtonImage, dataSetInterfaceImage_1, dataSetInterfaceImage_2, multipleDataSetsImage],
        examples: [
          `SELECT TOP (1) 
    CA_OBJECT_ID
FROM [azteca].[CA_OBJECT_VW] CA
WHERE CA.CA_OBJECT_ID=@QueryPermitId`
        ]
      }
    ]
  }