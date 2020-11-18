import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { SymmetricPropertyMixin } from '../lib/SymmetricProperty';

export const SymmetricPropertyBundle = [
  ObjectPropertyMixin as Mixin,
  SymmetricPropertyMixin as Mixin];
