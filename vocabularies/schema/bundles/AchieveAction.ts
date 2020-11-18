import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { AchieveActionMixin } from '../lib/AchieveAction';

export const AchieveActionBundle = [
  ActionMixin as Mixin,
  AchieveActionMixin as Mixin];
