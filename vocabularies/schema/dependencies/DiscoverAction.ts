import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { DiscoverActionMixin } from '../DiscoverAction';

export const DiscoverActionDependencies = [
  FindActionMixin as Mixin,
  DiscoverActionMixin as Mixin];
