import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPSideBarMixin } from '../WPSideBar';

export const WPSideBarBundle = [
  WebPageElementMixin as Mixin,
  WPSideBarMixin as Mixin];
