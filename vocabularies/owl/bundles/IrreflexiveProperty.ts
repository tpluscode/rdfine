import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { IrreflexivePropertyMixin } from '../IrreflexiveProperty';

export const IrreflexivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  IrreflexivePropertyMixin as Mixin];
