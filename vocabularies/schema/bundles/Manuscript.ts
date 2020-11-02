import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ManuscriptMixin } from '../Manuscript';

export const ManuscriptBundle = [
  CreativeWorkMixin as Mixin,
  ManuscriptMixin as Mixin];
