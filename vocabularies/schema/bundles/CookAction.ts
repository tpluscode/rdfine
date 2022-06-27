import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CookActionMixin } from '../lib/CookAction';
import { CreateActionMixin } from '../lib/CreateAction';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { FoodEventMixin } from '../lib/FoodEvent';
import { PlaceMixin } from '../lib/Place';
import { RecipeMixin } from '../lib/Recipe';

export const CookActionBundle = [
  CookActionMixin as Mixin,
  CreateActionMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  FoodEventMixin as Mixin,
  PlaceMixin as Mixin,
  RecipeMixin as Mixin];
