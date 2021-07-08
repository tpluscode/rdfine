import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { CookActionMixin } from '../lib/CookAction';
import { PlaceMixin } from '../lib/Place';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { FoodEventMixin } from '../lib/FoodEvent';
import { RecipeMixin } from '../lib/Recipe';

export const CookActionBundle = [
  CreateActionMixin as Mixin,
  CookActionMixin as Mixin,
  PlaceMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  FoodEventMixin as Mixin,
  RecipeMixin as Mixin];
