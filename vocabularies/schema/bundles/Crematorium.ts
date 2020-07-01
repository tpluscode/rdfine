import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { CrematoriumMixin } from '../Crematorium';

export const CrematoriumBundle = [
  CivicStructureMixin as Mixin,
  CrematoriumMixin as Mixin];
