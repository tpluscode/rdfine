import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { FilmActionMixin } from '../FilmAction';

export const FilmActionBundle = [
  CreateActionMixin as Mixin,
  FilmActionMixin as Mixin];
