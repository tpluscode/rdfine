import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { UpdateActionMixin } from '../UpdateAction';
import { ThingMixin } from '../Thing';

export const UpdateActionBundle = [
  ActionMixin as Mixin,
  UpdateActionMixin as Mixin,
  ThingMixin as Mixin];
