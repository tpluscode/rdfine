import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { CemeteryMixin } from '../Cemetery';

export const CemeteryDependencies = [
  CivicStructureMixin as Mixin,
  CemeteryMixin as Mixin];
