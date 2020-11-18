import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CodeMixin } from '../lib/Code';

export const CodeBundle = [
  CreativeWorkMixin as Mixin,
  CodeMixin as Mixin];
