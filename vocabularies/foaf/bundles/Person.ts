import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { ImageMixin } from '../lib/Image';
import { PersonMixin } from '../lib/Person';
import { DocumentMixin } from '../lib/Document';

export const PersonBundle = [
  AgentMixin as Mixin,
  ImageMixin as Mixin,
  PersonMixin as Mixin,
  DocumentMixin as Mixin];
