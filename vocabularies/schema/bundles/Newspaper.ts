import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeriodicalMixin } from '../Periodical';
import { NewspaperMixin } from '../Newspaper';

export const NewspaperBundle = [
  PeriodicalMixin as Mixin,
  NewspaperMixin as Mixin];
