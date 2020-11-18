import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../lib/Project';
import { ResearchProjectMixin } from '../lib/ResearchProject';

export const ResearchProjectBundle = [
  ProjectMixin as Mixin,
  ResearchProjectMixin as Mixin];
