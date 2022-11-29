import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IriTemplateMappingMixin } from '../lib/IriTemplateMapping';
import { IriTemplateMixin } from '../lib/IriTemplate';
import { VariableRepresentationMixin } from '../lib/VariableRepresentation';
import { VariableRepresentationExMixin } from '../extensions';

export const IriTemplateBundle = [
  IriTemplateMappingMixin as Mixin,
  IriTemplateMixin as Mixin,
  VariableRepresentationMixin as Mixin,
  VariableRepresentationExMixin as Mixin];
