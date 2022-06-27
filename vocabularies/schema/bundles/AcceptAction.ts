import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AcceptActionMixin } from '../lib/AcceptAction';
import { AllocateActionMixin } from '../lib/AllocateAction';

export const AcceptActionBundle = [
  AcceptActionMixin as Mixin,
  AllocateActionMixin as Mixin];
