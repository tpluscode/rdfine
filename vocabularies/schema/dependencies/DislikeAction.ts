import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { DislikeActionMixin } from '../DislikeAction';

export const DislikeActionDependencies = [
  ReactActionMixin as Mixin,
  DislikeActionMixin as Mixin];
