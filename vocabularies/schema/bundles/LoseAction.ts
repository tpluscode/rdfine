import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../lib/AchieveAction';
import { LoseActionMixin } from '../lib/LoseAction';
import { PersonMixin } from '../lib/Person';

export const LoseActionBundle = [
  AchieveActionMixin as Mixin,
  LoseActionMixin as Mixin,
  PersonMixin as Mixin];
