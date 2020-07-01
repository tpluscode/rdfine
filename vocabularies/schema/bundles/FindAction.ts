import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { FindActionMixin } from '../FindAction';

export const FindActionBundle = [
  ActionMixin as Mixin,
  FindActionMixin as Mixin];
