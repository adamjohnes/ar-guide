import { guideSections } from './guideSections';

export type TableOfContentHeading = {
  id: string;
  title: string;
};

export type TableOfContentSection = {
  id: string;
  sectionId: string;
  headings: TableOfContentHeading[];
};

export const tableOfContentSections: TableOfContentSection[] = guideSections.map((section) => ({
  id: `${section.id}-toc`,
  sectionId: section.id,
  headings: section.subsections.map((subsection) => ({
    id: subsection.id,
    title: subsection.title
  }))
}));
