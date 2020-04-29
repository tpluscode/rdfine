import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ChildCareMixin } from '../ChildCare';

export const ChildCareDependencies = [
  LocalBusinessMixin as Mixin,
  ChildCareMixin as Mixin];
