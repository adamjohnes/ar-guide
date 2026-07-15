import type { GuideSection } from "../../src/elements/types/GuideSection";

import { tableSelectionLocation } from "../../src/elements/imageExports/tables";

export const ChapterTables: GuideSection = {
  id: 'tables',
  path: '/guide/tables',
  title: 'Tables',
  description: `A <strong>table</strong> is its own report element and acts as a data region within the report. It contains columns and rows, and the intersection of a row and column creates a table cell. A table is connected to a data set, and its detail rows repeat for the records returned by that data set.

  Tables are commonly used for lists of permits, cases, fees, inspections, employees, and other information where several database records must be displayed. In addition to displaying data, tables can group, sort, filter, summarize, and conditionally format their records.

  Most table cells contain Textbox report elements. This distinction is important because the table controls how records repeat, while the textboxes inside the table control how individual values are displayed and formatted.`,
  subsections: [
    {
      id: 'table-structure',
      title: 'Table Structure',
      description: `By default, table cells contain Textbox report elements. The textbox displays the field, parameter, or expression assigned to that cell. Other report elements, such as images, may also be placed inside table cells when needed.

      Several table handles become available when a table is selected. The table element itself may be selected by clicking the button that looks like a circle and four outward arrows.

      Row and column handles select a particular row or column. Selecting one of these also selects the report elements contained within its cells.

      Individual cells can be selected to edit the Textbox or other report element contained inside that specific cell.`,
      keyPoints: [
        `The table's root handle is used to select and configure the complete table.`,
        `Most table cells contain separate Textbox report elements.`,
        `Adjacent table cells may be merged to create larger headings or display areas.`
      ],
      images: [tableSelectionLocation],
      examples: []
    },
    {
      id: 'table-data-set',
      title: 'Table Data Set Name',
      description: `Each table must be connected to the data set containing the records and fields that it displays. This connection is configured through the table's <em>[Table → Data Set Name]</em> property.

      The Data Set Name is especially important when a report contains multiple data sets. ActiveReports must know which data set should control the table's repeating detail rows. If the property is blank or references the wrong data set, the table may display no records, only one record, or field-expression errors.

      To access this property, select the complete table using its root handle and locate <strong>Data Set Name</strong> in the Properties panel.

      When fields are selected from the Data panel and dragged onto the report together, ActiveReports may automatically create a table and assign the correct data set. When a table is added manually from the toolbox, the Data Set Name should be confirmed before fields are added.

      A table is directly bound to one data set. If information from another data set is needed inside the table, the additional information should generally be added to the table's query, retrieved with a lookup expression, or displayed through another appropriately configured data region. A field from an unrelated data set should not be placed directly into the detail row without establishing how the two data sets are related.`,
      keyPoints: [
        `Select the table's root handle to access its Data Set Name property.`,
        `Always confirm the Data Set Name when the report contains more than one data set.`,
        `The selected data set determines which records cause the detail rows to repeat.`,
        `A table added from the toolbox may require its Data Set Name to be assigned manually.`,
        `Dragging fields from the Data panel may automatically create and bind the table.`,
        `Use a query join or lookup expression when the table needs information from another data set.`
      ],
      images: [],
      examples: [
        `Table Name: CaseTable
Data Set Name: CaseObject

Detail Cell Values:
{CA_OBJECT_ID}
{CASE_NUMBER}
{STATUS}`,

        `Multiple Data Sets:

CaseTable
Data Set Name: CaseObject

FeeTable
Data Set Name: CaseFees`
      ]
    },
    {
      id: 'repeating-rows',
      title: 'Repeating Rows and Row Types',
      description: `A table's <strong>detail row</strong> repeats once for each record returned by the table's assigned data set after any applicable filters have been processed.

      For example, if the query returns 100 records, the table's detail row can render 100 times. Only one detail row needs to be created on the design surface because ActiveReports generates the remaining instances when the report runs.

      A table can contain multiple designed detail rows. When this occurs, the complete set of detail rows repeats for every database record. This can be useful when one record requires several lines of information.

      Field references that should repeat must be placed inside a detail row. Placing a field in a table header or footer does not cause that row to repeat for every record. Headers are normally used for titles and column labels, while footers are used for totals or summary information.

      The primary table row types are:

      • <strong>Table Header:</strong> Appears at the beginning of the table and commonly displays the report title or column labels.

      • <strong>Group Header:</strong> Appears at the beginning of each group and displays information about the current group.

      • <strong>Detail Row:</strong> Repeats for each data-set record within the current table or group.

      • <strong>Group Footer:</strong> Appears at the end of each group and is commonly used for group totals.

      • <strong>Table Footer:</strong> Appears at the end of the complete table and is commonly used for grand totals.`,
      keyPoints: [
        `Detail rows repeat for each record returned by the table's assigned data set.`,
        `A field must be placed in the detail row when it should appear once for every record.`,
        `Multiple designed detail rows repeat together for each database record.`,
        `Header rows normally contain titles and column labels.`,
        `Group footers are useful for group totals, while table footers are useful for grand totals.`,
        `A query returning many records will still show only one value if the field is placed outside a repeating detail row.`
      ],
      images: [],
      examples: [
        `Query Result:
100 records

Table Design:
1 detail row

Rendered Report:
100 detail-row instances`,

        `Multiple Detail Rows:

Detail Row 1: {CASE_NUMBER}
Detail Row 2: {DESCRIPTION}

Both rows repeat for each case.`
      ]
    },
    {
      id: 'table-grouping',
      title: 'Table Grouping',
      description: `Table grouping organizes detail records into sections based on a shared field or expression. For example, cases could be grouped by status, inspections could be grouped by inspector, or fees could be grouped by fee type.

      Groups are commonly configured through the table's <strong>Group Editor</strong>. A group can be added by dragging a field from the Data panel into the Group Editor or by using the table's context menu to insert a group.

      The <strong>Group Expression</strong> determines how records are divided. Each distinct result of the expression creates a separate group instance. If the group expression is <em>{STATUS}</em>, ActiveReports creates a group for each distinct status returned by the data set.

      A group may contain a group header, a group footer, or both. The group header can display the current grouping value, while the group footer can display calculations such as the number of records or the total amount for that group.

      Groups may also be nested. A parent group establishes the larger category, while a child group separates records further within that category. For example, a table could first group permits by permit type and then group each permit type by status.

      Group settings may also control sorting, filtering, visibility, page breaks, and whether the group should remain together on the same page when space permits.`,
      keyPoints: [
        `Use the Group Editor to add, select, and configure table groups.`,
        `The Group Expression determines which records belong to each group instance.`,
        `Each distinct group-expression value creates a separate group.`,
        `Use group headers to identify a group and group footers to display group totals.`,
        `Parent and child groups can be used to create nested data organization.`,
        `Page breaks may be configured so that each group begins on a new page.`,
        `Grouping changes how records are organized; it does not replace the table's Data Set Name.`
      ],
      images: [],
      examples: [
        `Group Name: StatusGroup
Group Expression: {STATUS}

Possible Groups:
Open
In Progress
Closed`,

        `Group Footer Total:
{Count(CA_OBJECT_ID)}`,

        `Nested Groups:
Parent Group: {PERMIT_TYPE}
Child Group: {STATUS}`
      ]
    },
    {
      id: 'row-textbox-properties',
      title: 'Table Row and Textbox Properties',
      description: `A table row and the Textboxes contained inside that row are separate report elements. Selecting the row handle loads the row's properties, but it also selects the report items contained within the row's cells.

      After selecting a row handle, the Properties panel provides an additional <strong>TEXTBOX</strong> tab or selection. The row properties control behavior such as height, visibility, and page layout. The TEXTBOX properties control the values, fonts, backgrounds, borders, padding, and other formatting of the Textboxes contained within that row.

      This distinction is important for conditional row formatting. A table does not normally apply its background color directly to the row. Instead, the background expression must be applied to the Textboxes contained in the row.

      To create zebra striping, select the detail-row handle, switch to the <strong>TEXTBOX</strong> properties, and assign a RowNumber expression to <em>[Background → Color]</em>. Because the detail-row Textboxes repeat for each data record, RowNumber changes for each rendered row and alternates the returned color.

      Applying the expression to a table header, a standalone Textbox, or an element outside the repeating detail scope will not produce the intended alternating-row behavior.

      The TEXTBOX property selection should not be confused with the actual <strong>Visibility → Toggle Item</strong> property. Toggle Item is used to connect a row or group to a named Textbox that the user can click to expand or collapse content. It is useful for drill-down reports but is not required for zebra striping.`,
      keyPoints: [
        `The table row and the Textboxes inside its cells are separate report elements.`,
        `Select the row handle and then switch to the TEXTBOX properties to format all Textboxes in that row.`,
        `Use the row properties for height, visibility, and row-level layout behavior.`,
        `Use the TEXTBOX properties for background color, font, padding, borders, and displayed values.`,
        `Apply RowNumber-based background expressions to the repeating detail-row Textboxes.`,
        `The Visibility Toggle Item property is used for expand-and-collapse behavior, not zebra striping.`
      ],
      images: [],
      examples: [
        `Zebra Striping

1. Select the detail-row handle
2. Open the TEXTBOX properties
3. Locate Background → Color
4. Enter:

{IIF(RowNumber() Mod 2 = 0, "LightSlateGray", "White")}`,

        `Visibility Toggle Item

Controller Textbox: DetailsToggle
Target Row Visibility:
Toggle Item: DetailsToggle

This creates expand-and-collapse behavior and is separate from row formatting.`
      ]
    },
    {
      id: 'table-layout',
      title: 'Table Layout and Pagination',
      description: `A table's total width is determined by the combined width of its columns. The total table width should remain within the usable report page width after margins have been considered. A table that extends beyond the available page width may be clipped or may create unexpected additional pages.

      Column width should be based on the type and expected length of the displayed value. Identifier and date columns can generally be narrower, while names, addresses, and descriptions usually require more space.

      Textboxes inside table cells may use <strong>Can Grow</strong> to increase the height of a row when a value requires additional lines. This prevents long descriptions from being clipped, but it can also cause row heights to vary throughout the report.

      Table headers and group headers can be configured to repeat on new pages. Repeating column labels makes longer tables easier to understand after the table continues onto another page.

      The <strong>Keep Together</strong> setting attempts to keep a table or group on one page when enough space is available. Page-break settings can also be applied to groups when each category should begin on a separate page.

      Sorting and filtering can be applied at the table or group level. Filtering determines which records are displayed, while sorting determines the order in which the remaining records appear.`,
      keyPoints: [
        `Keep the combined width of all columns within the report's usable page width.`,
        `Give description fields more width than short identifiers or dates.`,
        `Use Can Grow on cell Textboxes when values may require additional lines.`,
        `Configure table or group headers to repeat on new pages when appropriate.`,
        `Use Keep Together carefully because large tables or groups may not fit on a single page.`,
        `Use filters to limit displayed records and sorting to control their rendered order.`,
        `Preview and print the report to confirm pagination instead of relying only on the design surface.`
      ],
      images: [],
      examples: [
        `Available Page Width:
8.5" page width
- 0.5" left margin
- 0.5" right margin
= 7.5" available table width`,

        `Recommended Header Setting:
Repeat On New Page: True`
      ]
    }
  ]
};