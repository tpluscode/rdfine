import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ThesisMixin } from '../lib/Thesis';

export const ThesisBundle = [
  CreativeWorkMixin as Mixin,
  ThesisMixin as Mixin];
