import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeriodicalMixin } from '../lib/Periodical';
import { NewspaperMixin } from '../lib/Newspaper';

export const NewspaperBundle = [
  PeriodicalMixin as Mixin,
  NewspaperMixin as Mixin];
