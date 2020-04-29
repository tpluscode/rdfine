import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPSideBarMixin } from '../WPSideBar';

export const WPSideBarDependencies = [
  WebPageElementMixin as Mixin,
  WPSideBarMixin as Mixin];
