import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionalEquivalenceRelationMixin } from '../lib/FunctionalEquivalenceRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation';

export const FunctionalEquivalenceRelationBundle = [
  FunctionalEquivalenceRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin];
