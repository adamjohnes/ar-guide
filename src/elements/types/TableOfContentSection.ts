export type TableOfContentHeading = {
  id: string;
  title: string;
};

export type TableOfContentSection = {
  id: string;
  sectionId: string;
  headings: TableOfContentHeading[];
};