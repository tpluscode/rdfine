import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptConstraintMixin } from '../lib/ScriptConstraint';
import { ScriptMixin } from '../lib/Script';

export const ScriptConstraintBundle = [
  ScriptConstraintMixin as Mixin,
  ScriptMixin as Mixin];
