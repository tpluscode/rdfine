import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';
import { IriTemplateMixin } from '../lib/IriTemplate';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';

export const IriTemplateBundle = [
  IriTemplateMappingMixin as Mixin,
  IriTemplateMixin as Mixin,
  VariableRepresentationMixin as Mixin];
