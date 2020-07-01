import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { MenuItemMixin } from '../MenuItem';
import { MenuSectionMixin } from '../MenuSection';
import { NutritionInformationMixin } from '../NutritionInformation';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';

export const MenuItemBundle = [
  IntangibleMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin,
  NutritionInformationMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin];
