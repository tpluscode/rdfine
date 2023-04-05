import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation';
import { ProductionTechniqueTypeMixin } from '../lib/ProductionTechniqueType';
import { TypeMixin } from '../lib/Type';

export const ProductionTechniqueTypeBundle = [
  InstantiationMixin as Mixin,
  ProductionTechniqueTypeMixin as Mixin,
  TypeMixin as Mixin];
