// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterSections: GuideSection = 
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
        images: [],
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
        images: [],
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
        images: [],
        examples: [
          'Group on CA_OBJECT_ID'
        ]
      }
    ]
  }