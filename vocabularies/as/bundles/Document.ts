import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { ObjectMixin } from '../lib/Object';

export const DocumentBundle = [
  DocumentMixin as Mixin,
  ObjectMixin as Mixin];
