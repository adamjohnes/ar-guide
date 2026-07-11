import type { GuideSection } from "./types/GuideSection";

// Chapters
import { ChapterPageSetup } from "../../data/chapters/page-setup";
import { ChapterSections } from "../../data/chapters/sections";
import { ChapterConnections } from "../../data/chapters/connections";
import { ChapterExpressions } from "../../data/chapters/expressions";
import { ChapterParameters } from "../../data/chapters/parameters";
import { ChapterSubreports } from "../../data/chapters/subreports";
import { ChapterTextboxes } from "../../data/chapters/textboxes";
import { ChapterTables } from "../../data/chapters/tables";

// The listed order below determines the order of how they are listed on the webpage

export const guideSections: GuideSection[] = [
  ChapterPageSetup,
  ChapterSections,
  ChapterConnections,
  ChapterExpressions,
  ChapterParameters,
  ChapterTextboxes,
  ChapterTables,
  ChapterSubreports
];
