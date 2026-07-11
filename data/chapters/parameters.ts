// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterParameters: GuideSection = 
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
  }