import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ScriptValidatorMixin } from '../lib/ScriptValidator';

export const ScriptValidatorBundle = [
  ScriptMixin as Mixin,
  ScriptValidatorMixin as Mixin];
