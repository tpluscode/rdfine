import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { TargetTypeMixin } from '../lib/TargetType';
import { JSTargetTypeMixin } from '../lib/JSTargetType';

export const JSTargetTypeBundle = [
  JSExecutableMixin as Mixin,
  TargetTypeMixin as Mixin,
  JSTargetTypeMixin as Mixin];
