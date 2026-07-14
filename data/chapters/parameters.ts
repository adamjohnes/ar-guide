// import { setupImageRibbon } from "../../src/elements/imageExports";
import type { GuideSection } from "../../src/elements/types/GuideSection";

import { nonQueriedImage, parameterQueryImage } from "../../src/elements/imageExports/parameters";
import { currentVersion } from "../../src/elements/types/CurrentVersion";

export const ChapterParameters: GuideSection = 
{
    id: 'parameters',
    path: '/guide/parameters',
    title: 'Parameters',
    description: `<strong>Parameters</strong> are named values passed into a report when it runs. For example, a parameter may provide a permit ID, case ID, employee ID, date range, status, or another value used to determine which records the report should retrieve and display. 
    
    <strong>Parameters are denoted in Active Reports by the @ symbol.</strong>

    Parameters are commonly referenced by data-set queries to filter database results. They can also be passed from a main report to a subreport or referenced by report expressions to control displayed text, visibility, formatting, and other report behavior. This makes parameters one of the primary tools for creating reports that respond dynamically.

    A parameter should generally be created before it is referenced by a query, expression, or subreport. Parameters can be added and managed from the <em>Data</em> panel. 

    Parameters may receive their values automatically from Cityworks or another report, or they may allow a user to enter or select a value. When a parameter should be limited to a controlled set of choices, <strong>Available Values</strong> can be configured to create a selection list. Each available option can contain a stored value and a user-friendly label. Available Values should only be configured when the report requires a controlled list, since unnecessary changes can interfere with the way a parameter receives or processes its value.`,
    subsections: [
      {
        id: 'edit-parameter',
        title: 'Edit Parameter',
        description: `Important settings include the parameter's Name, Prompt, and Data Type. The <strong>name</strong> is the internal identifier used when referencing the parameter, the <strong>prompt</strong> is the text displayed when a user is asked to provide a value, and the <strong>data type</strong> determines the kind of value the parameter accepts. 
        
        <strong>However, as of the current version: <u>${ currentVersion }</u>, the prompt seems to be bugged, and the name performs both the job of the name and prompt.</strong>`,
        keyPoints: [
          `For most parameters, the logic will work if the parameter is either an integer or a string.`,
          `[Unconfirmed, but likely to be true] For webhooks, the parameter must be exactly: Permitid and integer.`,
          `Three other unmentioned values exist under <em>[Parameter → Edit Parameter]</em>. These are: <strong>Multivalue</strong>, <strong>Hidden</strong> and <strong>Allow Null Value</strong>. It is recommended to keep these settings in their default state unless there is a very specific reason to turn them on as they can cause unexpected errors.`
        ],
        images: [],
        examples: []
      },
      {
        id: 'available-values',
        title: 'Available Values (From Query vs Non-Queried)',
        description: `Available Values provide the context of where the data exists to where the parameter is going to compare its input. There are two main categories: 

        <em>[Parameter → Source → From Query]</em> 
        <em>[Parameter → Source → Non-Queried]</em>. 
        
        <strong>From Query</strong>
        From query is the default option. From query is as it sounds, it pulls data from the query itself meaning that the parameter will be directly comparing with values from the dataset. This will often be the typical approach taken for most reports.

        <strong>Non-Queried</strong>
        Non-Queried can be perceived as a set of pre-determined values that the user who is running the report must match. You can fill out the values by adding <em>Parameter Values</em> to the field in the Non-Queried parameter. These values are paired in a Label → Value relationship, where the label is the abstraction that the user who is running the report sees; whereas the value is the actual value being used in the data comparisons.
        
        <strong>As of version: <u>${ currentVersion }</u> non-queried parameter values only use the left column (value) for both the text displayed in the prompt, as well as the value comparison and shown value displayed on a report.</strong>

        `,
        keyPoints: [
          'Only change Available Values when the report requires it.',
          'Unnecessary parameter edits can cause unexpected behavior and errors without proper understanding.'
        ],
        images: [nonQueriedImage],
        examples: [`A report that allows only runs for three wards:
Parameter: Ward
Available Values: Non-Queried
Parameter Values: Ward 1, Ward 2, Ward 3`,
        ]
      },
      {
        id: 'query-parameters',
        title: 'Using Parameters in a Query',
        description: `Parameters are most commonly used within data-set queries to control which database records are returned. When the report runs, a report parameter receives a value from the user, Cityworks, a parent report, or another runtime source. That value is then passed into the query so the same report can retrieve information for different permits, data tables or other records.

  Using parameters in this way allows a single report design to support many different records without changing its SQL. It also limits the query to the information needed for the current report rather than retrieving an entire table and filtering the results afterward.

  For queries, there exists two parameter versions:
  • A <strong>report parameter</strong>, created from the Data panel, that receives and stores the runtime value
  • A <strong>query parameter</strong>, such as <em>@QueryPermitId</em>, used as a placeholder inside the SQL query

  The report parameter and query parameter do not have to use the same name, but their relationship must be configured in the data set's parameters section. Using clear and consistent names makes this relationship easier to identify and maintain.`,
        keyPoints: [
          `Report parameters are displayed by wrapping them in curly braces. 
          The parameter can be dragged from the <em>[Data → Parameter]</em> onto the report page.`,
          'Do not wrap the query parameter in curly braces.',
          'Use the value contained in the field: <em>Parameter Name</em> - <strong>not</strong> <em>Value</em> - when adding a query parameter.',
        ],
        images: [parameterQueryImage],
        examples: []
      },
      {
        id: 'subreport-parameters',
        title: 'Subreport Parameters',
        description: `Subreport parameters work primarily in the same way report parameters do.`,
        keyPoints: [],
        images: [],
        examples: []
      }
    ]
  }