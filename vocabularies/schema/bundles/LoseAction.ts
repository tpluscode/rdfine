import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../AchieveAction';
import { LoseActionMixin } from '../LoseAction';
import { PersonMixin } from '../Person';

export const LoseActionBundle = [
  AchieveActionMixin as Mixin,
  LoseActionMixin as Mixin,
  PersonMixin as Mixin];
