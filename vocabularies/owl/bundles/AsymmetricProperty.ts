import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { AsymmetricPropertyMixin } from '../AsymmetricProperty';

export const AsymmetricPropertyBundle = [
  ObjectPropertyMixin as Mixin,
  AsymmetricPropertyMixin as Mixin];
