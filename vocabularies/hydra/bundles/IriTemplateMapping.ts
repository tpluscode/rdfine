import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';

export const IriTemplateMappingBundle = [
  IriTemplateMappingMixin as Mixin,
  VariableRepresentationMixin as Mixin];
