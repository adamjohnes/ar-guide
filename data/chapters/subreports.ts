import type { GuideSection } from "../../src/elements/types/GuideSection";

import { expressionsLink } from "../../src/elements/types/Jumplink";

export const ChapterSubreports: GuideSection = {
  id: 'subreports',
  path: '/guide/subreports',
  title: 'Subreports',
  description: `<strong>Subreports</strong> allow one report, referred to as the parent report, to display another report inside of it. The report being displayed is referred to as the child report or subreport. Although the two reports are designed and saved separately, they are processed together when the parent report runs.

  Subreports are useful when a portion of a report contains its own query, layout, parameters, or display requirements. They can also be used to create reusable report sections that may be included in multiple parent reports. For example, a permit report could use separate subreports to display fees, inspections, contacts, and other related information.

  At the City, reports intended to be used as subreports are identified by placing <strong>.include</strong> at the beginning of the report name. This helps distinguish reusable child reports from reports that are intended to be run directly by a user.

  A Subreport element acts as a container inside the parent report. The element identifies which child report should run, where its output should appear, and which values from the parent report should be passed into it. Because the parent and child remain separate reports, changes to the child report can affect every parent report that includes it.`,
  subsections: [
    {
      id: 'adding-subreports',
      title: 'Adding and Configuring a Subreport',
      description: `After placing a subreport, select the child report that should be displayed. This feature is found at: 
      [<em>Subreport → Common → Report Name</em>]. 
      In an ideal world, the selected report should be a report whose name begins with the City's .include prefix.

      Make sure the child report is saved and available in the same reporting environment as the parent. If the designer cannot locate the selected child report, the subreport may appear empty or produce an error when the parent report is previewed.`,
      keyPoints: [
        `Subreports cannot be placed inside page headers or page footers.`,
        `The Subreport element is only a container for the child report. The content shown inside it is still designed within the child report itself. Changes to fields, queries, parameters, textboxes, tables, and expressions should therefore be made inside the appropriate report.`,
        `The child report remains a separate report and maintains its own layout, data sets, parameters, and expressions.`
      ],
      images: [],
      examples: []
    },
    {
      id: 'subreport-parameters',
      title: 'Subreport Parameters',
      description: `Subreport parameters allow a parent report to pass values into a child report. The parameters used by the child are created as regular report parameters inside the child report, but their values are supplied through the Subreport element located in the parent report.

      Before configuring the parent report, create the required report parameter inside the child report. The parent can then map one of its own parameter values or data-set fields to that child parameter.

      This feature is found at: [<em>Subreport → Common → Report Parameters</em>].

      Each mapping contains two important parts: the parameter <strong>Name</strong> and its assigned <strong>Value</strong>. The Name identifies the report parameter inside the child report. The Value is an expression evaluated by the parent report and passed into the child when the subreport runs. 
      
      The parameter name entered on the parent's Subreport element must exactly match the parameter name inside the child report, including capitalization.`,
      keyPoints: [
        `Make sure the value supplied by the parent is compatible with the child parameter's configured data type.`,
      ],
      images: [],
      examples: []
    },
    {
      id: 'subreport-size-layout',
      title: 'Subreport Size and Layout',
      description: `The width and height of the Subreport element determine the initial area available for the child report inside the parent.

      The child report's page width, margins, and content width should be compatible with the space available in the parent report. If the child content is wider than the Subreport element or the parent's usable page area, the report may create unwanted horizontal overflow, blank pages, or unexpected page breaks.

      The child report may expand vertically as its content is generated. For example, a table inside the child report can increase the subreport's rendered height as additional records are returned. Leave enough room around the element and test it with both small and large data sets.`,
      keyPoints: [
        `Keep the child report's content width within the usable width of the parent report.`,
        `Avoid applying duplicate borders to both the Subreport element and the child report body.`
      ],
      images: [],
      examples: []
    },
    {
      id: 'subreport-visibility',
      title: 'Subreport Visibility',
      description: `The entire Subreport element can be shown or hidden through its Hidden property. 
      This feature is found at: [<em>Subreport → Visibility → Hidden</em>].

      A value of False displays the subreport, while a value of True hides it. The property may contain a static value or an expression based on a parent report parameter, data-set field, or another runtime condition.

      For more on expressions, see: ${expressionsLink}

      Visibility applied to the Subreport element controls the child report as a whole. If the parent hides the Subreport element, the child report's individual visibility settings cannot make its content appear.`,
      keyPoints: [],
      images: [],
      examples: [
`Display only when a permit ID exists:
{IIF(IsNothing(PermitId), True, False)}`
      ]
    }
  ]
};