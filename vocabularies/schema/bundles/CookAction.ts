import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { CookActionMixin } from '../lib/CookAction';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { PlaceMixin } from '../lib/Place';
import { FoodEventMixin } from '../lib/FoodEvent';
import { RecipeMixin } from '../lib/Recipe';

export const CookActionBundle = [
  CreateActionMixin as Mixin,
  CookActionMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  PlaceMixin as Mixin,
  FoodEventMixin as Mixin,
  RecipeMixin as Mixin];
