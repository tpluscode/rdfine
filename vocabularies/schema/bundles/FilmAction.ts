import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { FilmActionMixin } from '../lib/FilmAction';

export const FilmActionBundle = [
  CreateActionMixin as Mixin,
  FilmActionMixin as Mixin];
