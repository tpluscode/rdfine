import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../Function';
import { JSExecutableMixin } from '../JSExecutable';
import { JSFunctionMixin } from '../JSFunction';

export const JSFunctionBundle = [
  FunctionMixin as Mixin,
  JSExecutableMixin as Mixin,
  JSFunctionMixin as Mixin];
