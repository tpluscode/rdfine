import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationRelationMixin } from '../lib/DerivationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation';
import { TemporalRelationMixin } from '../lib/TemporalRelation';

export const DerivationRelationBundle = [
  DerivationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin,
  TemporalRelationMixin as Mixin];
