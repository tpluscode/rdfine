import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../lib/AchieveAction';
import { TieActionMixin } from '../lib/TieAction';

export const TieActionBundle = [
  AchieveActionMixin as Mixin,
  TieActionMixin as Mixin];
