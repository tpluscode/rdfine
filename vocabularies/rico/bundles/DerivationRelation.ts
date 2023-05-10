import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationRelationMixin } from '../lib/DerivationRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation.js';
import { TemporalRelationMixin } from '../lib/TemporalRelation.js';

export const DerivationRelationBundle = [
  DerivationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin,
  TemporalRelationMixin as Mixin];
