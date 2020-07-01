import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { ReflexivePropertyMixin } from '../ReflexiveProperty';

export const ReflexivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  ReflexivePropertyMixin as Mixin];
