import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation';
import { RepresentationTypeMixin } from '../lib/RepresentationType';
import { TypeMixin } from '../lib/Type';

export const RepresentationTypeBundle = [
  InstantiationMixin as Mixin,
  RepresentationTypeMixin as Mixin,
  TypeMixin as Mixin];
