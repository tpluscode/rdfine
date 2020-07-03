import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { SymmetricPropertyMixin } from '../SymmetricProperty';

export const SymmetricPropertyBundle = [
  ObjectPropertyMixin as Mixin,
  SymmetricPropertyMixin as Mixin];
