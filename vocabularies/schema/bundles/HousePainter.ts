import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { HousePainterMixin } from '../lib/HousePainter';

export const HousePainterBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  HousePainterMixin as Mixin];
