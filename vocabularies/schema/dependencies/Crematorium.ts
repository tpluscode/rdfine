import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { CrematoriumMixin } from '../Crematorium';

export const CrematoriumDependencies = [
  CivicStructureMixin as Mixin,
  CrematoriumMixin as Mixin];
