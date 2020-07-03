import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { UseActionMixin } from '../UseAction';

export const UseActionBundle = [
  ConsumeActionMixin as Mixin,
  UseActionMixin as Mixin];
