import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AsymmetricPropertyMixin } from '../lib/AsymmetricProperty';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';

export const AsymmetricPropertyBundle = [
  AsymmetricPropertyMixin as Mixin,
  ObjectPropertyMixin as Mixin];
