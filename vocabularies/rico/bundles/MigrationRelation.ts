import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationRelationMixin } from '../lib/DerivationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { MigrationRelationMixin } from '../lib/MigrationRelation';

export const MigrationRelationBundle = [
  DerivationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  MigrationRelationMixin as Mixin];
