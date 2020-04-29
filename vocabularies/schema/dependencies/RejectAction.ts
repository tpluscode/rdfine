import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../AllocateAction';
import { RejectActionMixin } from '../RejectAction';

export const RejectActionDependencies = [
  AllocateActionMixin as Mixin,
  RejectActionMixin as Mixin];
