import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ThesisMixin } from '../Thesis';

export const ThesisBundle = [
  CreativeWorkMixin as Mixin,
  ThesisMixin as Mixin];
