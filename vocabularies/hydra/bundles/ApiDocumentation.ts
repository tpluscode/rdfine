import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { StatusMixin } from '../Status';
import { ClassMixin } from '../Class';
import { ApiDocumentationMixin } from '../ApiDocumentation';

export const ApiDocumentationBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  ClassMixin as Mixin,
  ApiDocumentationMixin as Mixin];
