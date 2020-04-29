import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { InverseFunctionalPropertyMixin } from '../InverseFunctionalProperty';

export const InverseFunctionalPropertyDependencies = [
  ObjectPropertyMixin as Mixin,
  InverseFunctionalPropertyMixin as Mixin];
