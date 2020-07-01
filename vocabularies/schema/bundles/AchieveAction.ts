import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { AchieveActionMixin } from '../AchieveAction';

export const AchieveActionBundle = [
  ActionMixin as Mixin,
  AchieveActionMixin as Mixin];
