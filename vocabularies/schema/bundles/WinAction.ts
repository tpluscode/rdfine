import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AchieveActionMixin } from '../AchieveAction';
import { WinActionMixin } from '../WinAction';
import { PersonMixin } from '../Person';

export const WinActionBundle = [
  AchieveActionMixin as Mixin,
  WinActionMixin as Mixin,
  PersonMixin as Mixin];
