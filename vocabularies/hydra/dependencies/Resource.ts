import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApiDocumentationMixin } from '../ApiDocumentation';
import { CollectionMixin } from '../Collection';
import { OperationMixin } from '../Operation';
import { IriTemplateMixin } from '../IriTemplate';

export const ResourceDependencies = [
  ApiDocumentationMixin as Mixin,
  CollectionMixin as Mixin,
  OperationMixin as Mixin,
  IriTemplateMixin as Mixin];
