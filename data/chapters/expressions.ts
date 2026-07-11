// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterExpressions: GuideSection = 
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
    ]
  }