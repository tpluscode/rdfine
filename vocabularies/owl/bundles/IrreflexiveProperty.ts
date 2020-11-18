import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { IrreflexivePropertyMixin } from '../lib/IrreflexiveProperty';

export const IrreflexivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  IrreflexivePropertyMixin as Mixin];
