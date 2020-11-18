import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ManuscriptMixin } from '../lib/Manuscript';

export const ManuscriptBundle = [
  CreativeWorkMixin as Mixin,
  ManuscriptMixin as Mixin];
