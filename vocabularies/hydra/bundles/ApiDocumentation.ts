import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';
import { ClassMixin } from '../lib/Class';
import { ApiDocumentationMixin } from '../lib/ApiDocumentation';

export const ApiDocumentationBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  ClassMixin as Mixin,
  ApiDocumentationMixin as Mixin];
