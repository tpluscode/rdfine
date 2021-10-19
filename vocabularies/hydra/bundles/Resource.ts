import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ResourceMixin } from '../lib/Resource';
import { OperationMixin } from '../lib/Operation';
import { IriTemplateMixin } from '../lib/IriTemplate';

export const ResourceBundle = [
  CollectionMixin as Mixin,
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  IriTemplateMixin as Mixin];
