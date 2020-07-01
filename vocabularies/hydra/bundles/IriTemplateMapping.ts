import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { VariableRepresentationMixin } from '../VariableRepresentation';
import { IriTemplateMappingMixin } from '../IriTemplateMapping';

export const IriTemplateMappingBundle = [
  ResourceMixin as Mixin,
  VariableRepresentationMixin as Mixin,
  IriTemplateMappingMixin as Mixin];
