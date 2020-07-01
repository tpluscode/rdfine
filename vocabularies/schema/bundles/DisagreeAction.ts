import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { DisagreeActionMixin } from '../DisagreeAction';

export const DisagreeActionBundle = [
  ReactActionMixin as Mixin,
  DisagreeActionMixin as Mixin];
