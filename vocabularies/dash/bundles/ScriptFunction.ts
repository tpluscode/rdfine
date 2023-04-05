import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptFunctionMixin } from '../lib/ScriptFunction';
import { ScriptMixin } from '../lib/Script';

export const ScriptFunctionBundle = [
  ScriptFunctionMixin as Mixin,
  ScriptMixin as Mixin];
