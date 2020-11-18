import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { ReflexivePropertyMixin } from '../lib/ReflexiveProperty';

export const ReflexivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  ReflexivePropertyMixin as Mixin];
