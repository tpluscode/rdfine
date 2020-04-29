import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { LikeActionMixin } from '../LikeAction';

export const LikeActionDependencies = [
  ReactActionMixin as Mixin,
  LikeActionMixin as Mixin];
