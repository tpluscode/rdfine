import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { PhotographActionMixin } from '../PhotographAction';

export const PhotographActionDependencies = [
  CreateActionMixin as Mixin,
  PhotographActionMixin as Mixin];
