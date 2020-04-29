import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { PlumberMixin } from '../Plumber';

export const PlumberDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  PlumberMixin as Mixin];
