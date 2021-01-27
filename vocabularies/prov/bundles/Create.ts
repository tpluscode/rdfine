import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContributeMixin } from '../lib/Contribute';
import { CreateMixin } from '../lib/Create';

export const CreateBundle = [
  ContributeMixin as Mixin,
  CreateMixin as Mixin];
