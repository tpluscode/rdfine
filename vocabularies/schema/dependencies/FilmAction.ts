import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { FilmActionMixin } from '../FilmAction';

export const FilmActionDependencies = [
  CreateActionMixin as Mixin,
  FilmActionMixin as Mixin];
