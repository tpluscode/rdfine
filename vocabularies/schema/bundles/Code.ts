import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CodeMixin } from '../Code';

export const CodeBundle = [
  CreativeWorkMixin as Mixin,
  CodeMixin as Mixin];
