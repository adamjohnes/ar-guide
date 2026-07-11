import { guideSections } from './guideSections';
import type { TableOfContentSection } from './types/TableOfContentSection';

export const tableOfContentSections: TableOfContentSection[] = guideSections.map((section) => ({
  id: `${section.id}-toc`,
  sectionId: section.id,
  headings: section.subsections.map((subsection) => ({
    id: subsection.id,
    title: subsection.title
  }))
}));
