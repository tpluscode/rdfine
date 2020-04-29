import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InsertActionMixin } from '../InsertAction';
import { AppendActionMixin } from '../AppendAction';

export const AppendActionDependencies = [
  InsertActionMixin as Mixin,
  AppendActionMixin as Mixin];
