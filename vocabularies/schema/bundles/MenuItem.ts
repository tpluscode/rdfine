import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MenuItemMixin } from '../lib/MenuItem';
import { MenuSectionMixin } from '../lib/MenuSection';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';

export const MenuItemBundle = [
  IntangibleMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin,
  NutritionInformationMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin];
