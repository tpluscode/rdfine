import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { IriTemplateMappingMixin } from '../IriTemplateMapping';
import { IriTemplateMixin } from '../IriTemplate';

export const IriTemplateDependencies = [
  ResourceMixin as Mixin,
  IriTemplateMappingMixin as Mixin,
  IriTemplateMixin as Mixin];
