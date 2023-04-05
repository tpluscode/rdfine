import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DemandMixin } from '../lib/Demand';
import { IntangibleMixin } from '../lib/Intangible';
import { MenuItemMixin } from '../lib/MenuItem';
import { MenuSectionMixin } from '../lib/MenuSection';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { OfferMixin } from '../lib/Offer';

export const MenuItemBundle = [
  DemandMixin as Mixin,
  IntangibleMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin,
  NutritionInformationMixin as Mixin,
  OfferMixin as Mixin];
