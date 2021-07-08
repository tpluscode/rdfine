import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ResearcherMixin } from '../lib/Researcher';

export const ResearcherBundle = [
  AudienceMixin as Mixin,
  ResearcherMixin as Mixin];
