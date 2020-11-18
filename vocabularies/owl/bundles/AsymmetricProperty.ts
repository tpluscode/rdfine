import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { AsymmetricPropertyMixin } from '../lib/AsymmetricProperty';

export const AsymmetricPropertyBundle = [
  ObjectPropertyMixin as Mixin,
  AsymmetricPropertyMixin as Mixin];
