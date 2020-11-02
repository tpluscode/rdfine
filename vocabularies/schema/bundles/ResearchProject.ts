import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../Project';
import { ResearchProjectMixin } from '../ResearchProject';

export const ResearchProjectBundle = [
  ProjectMixin as Mixin,
  ResearchProjectMixin as Mixin];
