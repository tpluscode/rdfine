import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { CookActionMixin } from '../CookAction';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { PlaceMixin } from '../Place';
import { FoodEventMixin } from '../FoodEvent';
import { RecipeMixin } from '../Recipe';

export const CookActionBundle = [
  CreateActionMixin as Mixin,
  CookActionMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  PlaceMixin as Mixin,
  FoodEventMixin as Mixin,
  RecipeMixin as Mixin];
