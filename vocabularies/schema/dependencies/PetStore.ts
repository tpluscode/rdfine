import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { PetStoreMixin } from '../PetStore';

export const PetStoreDependencies = [
  StoreMixin as Mixin,
  PetStoreMixin as Mixin];
