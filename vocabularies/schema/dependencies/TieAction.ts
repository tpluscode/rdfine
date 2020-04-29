import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../AchieveAction';
import { TieActionMixin } from '../TieAction';

export const TieActionDependencies = [
  AchieveActionMixin as Mixin,
  TieActionMixin as Mixin];
