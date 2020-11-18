import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { RejectActionMixin } from '../lib/RejectAction';

export const RejectActionBundle = [
  AllocateActionMixin as Mixin,
  RejectActionMixin as Mixin];
