import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { SymmetricPropertyMixin } from '../SymmetricProperty';

export const SymmetricPropertyDependencies = [
  ObjectPropertyMixin as Mixin,
  SymmetricPropertyMixin as Mixin];
