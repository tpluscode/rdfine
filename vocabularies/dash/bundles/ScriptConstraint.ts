import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ScriptConstraintMixin } from '../lib/ScriptConstraint';

export const ScriptConstraintBundle = [
  ScriptMixin as Mixin,
  ScriptConstraintMixin as Mixin];
