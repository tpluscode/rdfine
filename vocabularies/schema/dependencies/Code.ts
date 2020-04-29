import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CodeMixin } from '../Code';

export const CodeDependencies = [
  CreativeWorkMixin as Mixin,
  CodeMixin as Mixin];
