import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { IriTemplateMixin } from '../lib/IriTemplate';
import { OperationMixin } from '../lib/Operation';
import { ResourceMixin } from '../lib/Resource';

export const ResourceBundle = [
  CollectionMixin as Mixin,
  IriTemplateMixin as Mixin,
  OperationMixin as Mixin,
  ResourceMixin as Mixin];
