import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { AcceptActionMixin } from '../lib/AcceptAction';

export const AcceptActionBundle = [
  AllocateActionMixin as Mixin,
  AcceptActionMixin as Mixin];
