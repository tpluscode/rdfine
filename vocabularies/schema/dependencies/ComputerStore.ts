import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ComputerStoreMixin } from '../ComputerStore';

export const ComputerStoreDependencies = [
  StoreMixin as Mixin,
  ComputerStoreMixin as Mixin];
