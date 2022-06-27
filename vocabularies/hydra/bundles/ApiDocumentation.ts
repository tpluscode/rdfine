import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApiDocumentationMixin } from '../lib/ApiDocumentation';
import { ClassMixin } from '../lib/Class';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';

export const ApiDocumentationBundle = [
  ApiDocumentationMixin as Mixin,
  ClassMixin as Mixin,
  ResourceMixin as Mixin,
  StatusMixin as Mixin];
