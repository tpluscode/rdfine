import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../UpdateAction';
import { ReplaceActionMixin } from '../ReplaceAction';
import { ThingMixin } from '../Thing';

export const ReplaceActionBundle = [
  UpdateActionMixin as Mixin,
  ReplaceActionMixin as Mixin,
  ThingMixin as Mixin];
