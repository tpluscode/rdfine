import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { DocumentMixin } from '../lib/Document';

export const DocumentBundle = [
  ObjectMixin as Mixin,
  DocumentMixin as Mixin];
