import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { HousePainterMixin } from '../HousePainter';

export const HousePainterDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  HousePainterMixin as Mixin];
