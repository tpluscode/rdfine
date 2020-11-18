import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';

export const VariableRepresentationBundle = [
  ResourceMixin as Mixin,
  VariableRepresentationMixin as Mixin];
