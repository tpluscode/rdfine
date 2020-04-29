import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { UseActionMixin } from '../UseAction';

export const UseActionDependencies = [
  ConsumeActionMixin as Mixin,
  UseActionMixin as Mixin];
