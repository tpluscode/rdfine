import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ShapeScriptMixin } from '../lib/ShapeScript';

export const ShapeScriptBundle = [
  ScriptMixin as Mixin,
  ShapeScriptMixin as Mixin];
