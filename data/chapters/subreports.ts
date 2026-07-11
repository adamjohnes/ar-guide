// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterSubreports: GuideSection = 
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
  }