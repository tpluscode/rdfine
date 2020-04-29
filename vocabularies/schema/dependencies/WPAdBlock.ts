import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPAdBlockMixin } from '../WPAdBlock';

export const WPAdBlockDependencies = [
  WebPageElementMixin as Mixin,
  WPAdBlockMixin as Mixin];
