import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UseActionMixin } from '../UseAction';
import { WearActionMixin } from '../WearAction';

export const WearActionBundle = [
  UseActionMixin as Mixin,
  WearActionMixin as Mixin];
