import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../AllocateAction';
import { AcceptActionMixin } from '../AcceptAction';

export const AcceptActionBundle = [
  AllocateActionMixin as Mixin,
  AcceptActionMixin as Mixin];
