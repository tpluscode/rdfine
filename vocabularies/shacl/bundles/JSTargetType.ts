import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSTargetTypeMixin } from '../lib/JSTargetType';
import { TargetTypeMixin } from '../lib/TargetType';

export const JSTargetTypeBundle = [
  JSExecutableMixin as Mixin,
  JSTargetTypeMixin as Mixin,
  TargetTypeMixin as Mixin];
