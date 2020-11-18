import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../lib/AchieveAction';
import { WinActionMixin } from '../lib/WinAction';
import { PersonMixin } from '../lib/Person';

export const WinActionBundle = [
  AchieveActionMixin as Mixin,
  WinActionMixin as Mixin,
  PersonMixin as Mixin];
