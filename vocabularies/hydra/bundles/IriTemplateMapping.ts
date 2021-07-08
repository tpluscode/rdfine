import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';

export const IriTemplateMappingBundle = [
  VariableRepresentationMixin as Mixin,
  IriTemplateMappingMixin as Mixin];
