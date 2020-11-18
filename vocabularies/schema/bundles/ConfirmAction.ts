import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InformActionMixin } from '../lib/InformAction';
import { ConfirmActionMixin } from '../lib/ConfirmAction';

export const ConfirmActionBundle = [
  InformActionMixin as Mixin,
  ConfirmActionMixin as Mixin];
