import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';
import { ApiDocumentationMixin } from '../lib/ApiDocumentation';
import { ClassMixin } from '../lib/Class';

export const ApiDocumentationBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  ApiDocumentationMixin as Mixin,
  ClassMixin as Mixin];
