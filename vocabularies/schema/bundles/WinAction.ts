import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../lib/AchieveAction';
import { PersonMixin } from '../lib/Person';
import { WinActionMixin } from '../lib/WinAction';

export const WinActionBundle = [
  AchieveActionMixin as Mixin,
  PersonMixin as Mixin,
  WinActionMixin as Mixin];
