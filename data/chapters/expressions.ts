import type { GuideSection } from "../../src/elements/types/GuideSection";

import { expressionLocationImage } from "../../src/elements/imageExports/expressions";
import { tableLink } from "../../src/elements/types/Jumplink";

export const ChapterExpressions: GuideSection = 
{
    id: 'expressions',
    path: '/guide/expressions',
    title: 'Expressions',
    description: `<strong>Expressions</strong> are formulas that ActiveReports evaluates while a report is running. They allow the values and properties of report elements to respond dynamically to data, parameters, calculations and other conditions within the report.

    Expressions can be used to display calculated values, hide or show report elements, change colors and formatting, combine text, count records, calculate totals and perform many other runtime operations. Most configurable properties in ActiveReports can accept an expression.`,
    subsections: [
    {
      id: 'expressions',
      title: 'Further Explaining Expressions',
      description: `An expression may be as simple as a mathematical calculation or as detailed as a conditional statement involving fields, parameters, and functions. ActiveReports provides functions such as <strong>Sum()</strong>, <strong>Count()</strong>, <strong>IIF()</strong>, and <strong>RowNumber()</strong> to support common calculations and decisions.

      The complete expression must be wrapped in a single pair of curly braces. Do not wrap individual field names, parameters, or portions of the expression in additional curly braces. Text and color values returned by an expression must be enclosed in quotation marks, while numbers, Boolean values, and field references are generally left unquoted.`,
      keyPoints: [
        `Wrap the complete expression in one pair of curly braces.`,
        `Use quotation marks around literal text, color names, and other string values.`,
      ],
      images: [expressionLocationImage],
      examples: [
        `{4 + 4}`,
        `{IIF(employeeID = 100, False, True)}`,
        `{IIF(RowNumber() Mod 2 = 0, "LightSlateGray", "Black")}`,
        `{Sum(Amount)}`
      ]
    },
    {
      id: 'expression-editor',
      title: 'Expression Editor',
      description: `The <strong>Expression Editor</strong> provides a central location for creating and reviewing an expression. It can be opened by selecting the expression button beside a property that supports dynamic values. The name of the property being configured appears at the top of the editor, such as <em>Background → Color</em>, <em>Visibility → Hidden</em>, or a textbox value.

      The <strong>Values</strong> area on the left provides access to constants, parameters, data-set fields, report items, common values, and other information available to the report. These categories can be expanded to locate and insert values into the expression. Using the available entries can help prevent spelling errors and makes it easier to identify the correct field or parameter name.

      The <strong>Functions</strong> area contains the functions supported by ActiveReports. These are organized into categories such as Date & Time, Math, Text, Inspection, Program Flow, Aggregate, Conversion, and Miscellaneous. Expanding a category allows you to review and insert functions appropriate for the expression being created.`,
      keyPoints: [
        `Use the Values and Functions lists to locate supported fields, parameters, and functions.`,
        `Start with a small expression and add additional conditions after confirming that the basic expression works.`
      ],
      images: [],
      examples: []
    },
        {
      id: 'fields-parameters-literal-values',
      title: 'Fields, Parameters, and Literal Values',
      description: `Expressions can contain data-set fields, report parameters, and literal values. Although these values may appear together in the same expression, ActiveReports identifies and evaluates each type differently.

      <strong>Data-set fields</strong> contain values returned by a report query. A field is referenced directly by its field name, such as <em>{CA_OBJECT_ID}</em>. When the expression is evaluated inside a table detail row, the field reference returns the value associated with the current record.

      A field must be available within the expression's current data scope. For example, a textbox inside a table can directly reference fields from the data set assigned to that table. A textbox outside the table may require an aggregate function with an explicitly named scope, such as <em>First()</em>, because it does not have a current table row.

      For more about how to supply the context of a textbox within a table with a dataset, see: ${tableLink}: 

      <strong>Literal values</strong> are fixed values written directly into an expression. Text, labels, status values, and color names must be enclosed in quotation marks. Numbers and Boolean values such as <strong>100</strong>, <strong>True</strong>, and <strong>False</strong> are not enclosed in quotation marks.`,
      keyPoints: [
        `Reference a data-set field directly by its field name. You may also use brackets [] to wrap field names, but ActiveReports will unfortunately remove these once the expression has been evaluated.`,
        `Reference a report parameter by placing @ before its name.`,
        `Place quotation marks around text and color names.`,
        `Distinction is important because an unquoted word is interpreted as a field or another recognized identifier. For example, <em>"Black"</em> is a literal color value, while <em>Black</em> without quotation marks is interpreted as the name of a field.`
      ],
      images: [],
      examples: [
        `Data-Set Field: {CA_OBJECT_ID}`,

        `Report Parameter: {@PermitId}`,

        `Literal Text: {"Permit"}`,

        `Comparing a Field with a Parameter: {IIF(CA_OBJECT_ID = @PermitId, "Match", "No Match")}`,

        `Checking for a Null Value: {IIF(CA_OBJECT_ID Is Null, "No ID", CA_OBJECT_ID)}`,

        `Referencing a Field Outside Its Detail Row: {First(CA_OBJECT_ID, "CaseObject")}`
      ]
    },
    {
      id: 'conditional-expressions',
      title: 'Conditional Expressions',
      description: `Conditional expressions allow a report property to return different values depending on whether a specified condition is met. They are commonly used to control visibility, colors, displayed text, formatting, and other report behavior.

      The most commonly used conditional function is <strong>IIF()</strong>. An IIF expression contains three parts:

      <em>IIF(condition, value when true, value when false)</em>

      ActiveReports first evaluates the condition. If the condition is <strong>True</strong>, the first value is returned. If the condition is <strong>False</strong>, the second value is returned.

      Conditions are commonly created using comparison operators such as =, &lt;&gt;, &gt;, &lt;, &gt;=, and &lt;=. Multiple conditions may be combined using operators such as <strong>And</strong>, <strong>Or</strong>, and <strong>Not</strong>.

      Pay close attention to the property being controlled. A color property must return valid color values, while a visibility property must return Boolean values. When controlling <em>[Visibility → Hidden]</em>, returning <strong>True</strong> hides the report element and returning <strong>False</strong> displays it.

      When more than two possible results are required, the <strong>Switch()</strong> function may be easier to read than several nested IIF expressions. Switch evaluates its conditions in order and returns the value associated with the first condition that evaluates to True.`,
      keyPoints: [
        `An IIF expression requires a condition, a value to return when the condition is True, and a value to return when it is False.`,
        `Both possible return values should be compatible with the property being controlled.`,
      ],
      images: [],
      examples: [
        `{IIF(Amount > 0, "Balance Due", "Paid")}`,

        `{IIF(Status = "Open" And Amount > 0, "Action Required", "No Action Required")}`,

        `{Switch(Priority = 1, "High", Priority = 2, "Medium", Priority = 3, "Low")}`
      ]
    }
  ]
  }