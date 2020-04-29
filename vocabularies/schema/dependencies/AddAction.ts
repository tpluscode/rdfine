import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../UpdateAction';
import { AddActionMixin } from '../AddAction';

export const AddActionDependencies = [
  UpdateActionMixin as Mixin,
  AddActionMixin as Mixin];
