import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../lib/AchieveAction';
import { ActionMixin } from '../lib/Action';

export const AchieveActionBundle = [
  AchieveActionMixin as Mixin,
  ActionMixin as Mixin];
