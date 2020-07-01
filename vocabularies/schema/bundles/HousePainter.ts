import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { HousePainterMixin } from '../HousePainter';

export const HousePainterBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  HousePainterMixin as Mixin];
