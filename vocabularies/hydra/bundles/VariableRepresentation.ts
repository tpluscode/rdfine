import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { VariableRepresentationMixin } from '../VariableRepresentation';

export const VariableRepresentationBundle = [
  ResourceMixin as Mixin,
  VariableRepresentationMixin as Mixin];
