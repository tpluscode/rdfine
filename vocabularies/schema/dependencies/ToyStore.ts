import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ToyStoreMixin } from '../ToyStore';

export const ToyStoreDependencies = [
  StoreMixin as Mixin,
  ToyStoreMixin as Mixin];
