import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { WantActionMixin } from '../WantAction';

export const WantActionDependencies = [
  ReactActionMixin as Mixin,
  WantActionMixin as Mixin];
