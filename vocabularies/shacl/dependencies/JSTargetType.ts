import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { TargetTypeMixin } from '../TargetType';
import { JSTargetTypeMixin } from '../JSTargetType';

export const JSTargetTypeDependencies = [
  JSExecutableMixin as Mixin,
  TargetTypeMixin as Mixin,
  JSTargetTypeMixin as Mixin];
