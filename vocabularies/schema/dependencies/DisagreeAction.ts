import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { DisagreeActionMixin } from '../DisagreeAction';

export const DisagreeActionDependencies = [
  ReactActionMixin as Mixin,
  DisagreeActionMixin as Mixin];
