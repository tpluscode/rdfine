import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';

export const IriTemplateMappingBundle = [
  ResourceMixin as Mixin,
  VariableRepresentationMixin as Mixin,
  IriTemplateMappingMixin as Mixin];
