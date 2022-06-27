import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CodeMixin } from '../lib/Code';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const CodeBundle = [
  CodeMixin as Mixin,
  CreativeWorkMixin as Mixin];
