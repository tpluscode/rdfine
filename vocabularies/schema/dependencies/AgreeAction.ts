import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { AgreeActionMixin } from '../AgreeAction';

export const AgreeActionDependencies = [
  ReactActionMixin as Mixin,
  AgreeActionMixin as Mixin];
