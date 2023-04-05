import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IrreflexivePropertyMixin } from '../lib/IrreflexiveProperty';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';

export const IrreflexivePropertyBundle = [
  IrreflexivePropertyMixin as Mixin,
  ObjectPropertyMixin as Mixin];
