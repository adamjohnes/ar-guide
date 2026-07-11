import { gridAndSnapImage, rulerImage } from "../../src/elements/imageExports/page-setup";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterPageSetup: GuideSection = 
{
    id: 'page-setup',
    path: '/guide/page-setup',
    title: 'Page Setup',
    description: `Report-level configuration, metadata and section workspace settings for margins, grids and rulers, snapping and other tools.`,
    subsections: [
      {
        id: 'report-properties',
        title: 'Report Properties',
        description: `Access report-level properties by clicking the space outside of the page. Most of these report properties are unlikely to need changed; however, it is common to adjust section-level properties. Section-level properties can be accessed by clicking the section header located in the bottom left of your window.
        
        Unless you have already renamed the section element, typically this will be labeled as: <em>ContinuousSection1</em>`,
        keyPoints: [],
        images: [],
        examples: []
      },
      {
        id: 'report-orientation',
        title: 'Page Sizes and Orientation',
        description: `Page size defines the width and height of a report section, while orientation determines whether the section uses a vertical (Portrait) or horizontal (Landscape) layout. Consider configuring these settings before arranging report content, as changing them later may affect the placement and spacing of report elements.
        
        These settings are accessible at: 
        <em>[section → page size → page width/page height]</em>
        <em>[section → page size → page orientation]</em>`,
        keyPoints: [`Notably, page size settings only affect the <strong>section</strong>, not the whole report.`,
          `Portrait and Landscape are the two most common page orientations. Their width and heights are reversed. 
          The default settings for each are:

          <strong>Portrait</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Landscape</strong>
            Width: 8.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Width: 11"
            Height: 11"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Height: 8.5"
            
          You can zoom in/out of your report window by adjusting the zoom percentage found in the bottom right ribbon.`
        ],
        images: [],
        examples: []
      },
      {
        id: 'margins',
        title: 'Margins',
        description: `Margins define the space between report content and the edges of the page. Adjusting them changes the usable page area and affects how much content can fit within the report layout.

        Margins can be adjusted in three ways:

        1. Using the rulers along the sides of the page
        2. Accessing the [margins → sizes] settings in the section-level properties
        3. Accessing the [margins → style] setting in the section-level properties
          `,
        keyPoints: [`Notably, margin settings only affect the <strong>section</strong>, not the whole report.`,
          `To visually adjust margins, drag the horizontal ruler left/right and drag the vertical ruler up/down.`,
          `You can toggle rulers visibility by using the ruler icon in the bottom right ribbon of your report window.`,

          `Narrow and normal are the two most common margin orientations. 
          The settings for each are:

          <strong>Narrow</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong> Normal</strong>
            Width: 0.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Width: 1.0"
            Height: 0.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Height: 1.0"`
        ],
        images: [
          rulerImage
        ],
        examples: []
      },
      {
        id: 'grid-snap',
        title: 'Grid and Snap',
        description: `Grid and snap tools help align and position report elements more consistently. The grid provides visual reference points, while snapping guides elements into uniform positions as they are moved or resized. Together, these tools make it easier to create organized, evenly spaced report layouts.
        
        It is highly recommended to explore these settings.`,
        keyPoints: [
          'Toggle grid and snapping options from the bottom right ribbon of your report window, denoted by the grid and magnet icons.',
          `You can adjust your grid size from this same area.`
        ],
        images: [gridAndSnapImage],
        examples: []
      },
    ]
  }