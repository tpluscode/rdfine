import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';
import { IriTemplateMixin } from '../lib/IriTemplate';

export const IriTemplateBundle = [
  IriTemplateMappingMixin as Mixin,
  VariableRepresentationMixin as Mixin,
  IriTemplateMixin as Mixin];
