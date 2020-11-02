import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../Agent';
import { ImageMixin } from '../Image';
import { PersonMixin } from '../Person';
import { DocumentMixin } from '../Document';

export const PersonBundle = [
  AgentMixin as Mixin,
  ImageMixin as Mixin,
  PersonMixin as Mixin,
  DocumentMixin as Mixin];
