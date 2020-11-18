import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../lib/Function';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSFunctionMixin } from '../lib/JSFunction';

export const JSFunctionBundle = [
  FunctionMixin as Mixin,
  JSExecutableMixin as Mixin,
  JSFunctionMixin as Mixin];
