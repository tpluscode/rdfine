import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../AllocateAction';
import { AcceptActionMixin } from '../AcceptAction';

export const AcceptActionDependencies = [
  AllocateActionMixin as Mixin,
  AcceptActionMixin as Mixin];
