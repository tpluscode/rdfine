import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ScriptFunctionMixin } from '../lib/ScriptFunction';

export const ScriptFunctionBundle = [
  ScriptMixin as Mixin,
  ScriptFunctionMixin as Mixin];
