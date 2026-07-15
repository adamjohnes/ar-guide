import type { GuideSection } from "../../src/elements/types/GuideSection";

import { continuousSectionImage } from "../../src/elements/imageExports/continuous-sections";
import { marginsLink, expressionsLink } from "../../src/elements/types/Jumplink";

export const ChapterContinuousSections: GuideSection = {
  id: 'continuous-sections',
  path: '/guide/continuous-sections',
  title: 'Continuous Sections',
  description: `<strong>Continuous sections</strong> are can be thought of new page containers, used to group related report content and apply settings to that content as a single unit. They are especially useful when organizing subreports or separating groups of content that require their own layout, visibility, margins, or page-break behavior.

  A continuous section exists as a new page which can be configured independently from the sections around it. To access the settings for a specific continuous section, click its label in the bottom-left corner of the report window.`,
  subsections: [
    {
      id: 'configurations',
      title: 'Configurations',
      description: `The name and label fields are found in:
      [<em>Continuous Section → Name</em>]
      [<em>Continuous Section → Label</em>] 
      
      These fields can both visually help identify a continuous section, but they serve slightly different purposes:

      • The <strong>Label</strong> controls the text that is visibly displayed for the continuous section in the bottom-left corner of the report designer.
      • The <strong>Name</strong> is the section's internal identifier. It is primarily used when referencing the continuous section through C# or other .NET integrations. However, it will also adjust the display text in the bottom left corner if the label has not been changed.

      Continuous sections also provide their own margin settings, found in: 
      [<em>Continuous Section → Margins</em>]. 
      
      These settings control the spacing around the content contained within that particular section. For more information about configuring margins, see ${marginsLink}.

      It is also possible to control whether a continuous section is displayed by changing its visibility, found in:
      [<em>Continuous Section → Visibility → Hidden</em>]
      
      When a continuous section is hidden, that setting applies to the entire section and all report elements contained within it. A child report element cannot make itself visible when its parent continuous section is hidden.

      Because of this behavior, a continuous section's visibility expression acts as a higher-level rule for its child elements. The visibility settings on the individual elements are only relevant when the continuous section itself is visible.

      For more information about visibility settings and expressions, see ${expressionsLink}.`,
      keyPoints: [
        `A continuous section's visibility expression applies to the entire section and takes priority over the visibility settings of its child report elements.`,
        `Use continuous sections to organize subreports and separate groups of content that need to appear on their own individual pages.`,
        `If the margins between a main report's continuous section and subreport's continuous section are inconsistent, elements will appear scattered all over the page in a print output.`
      ],
      images: [
        continuousSectionImage
      ],
      examples: []
    }
  ]
};