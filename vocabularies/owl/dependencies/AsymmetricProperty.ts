import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { AsymmetricPropertyMixin } from '../AsymmetricProperty';

export const AsymmetricPropertyDependencies = [
  ObjectPropertyMixin as Mixin,
  AsymmetricPropertyMixin as Mixin];
