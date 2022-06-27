import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { DocumentMixin } from '../lib/Document';
import { ImageMixin } from '../lib/Image';
import { PersonMixin } from '../lib/Person';

export const PersonBundle = [
  AgentMixin as Mixin,
  DocumentMixin as Mixin,
  ImageMixin as Mixin,
  PersonMixin as Mixin];
