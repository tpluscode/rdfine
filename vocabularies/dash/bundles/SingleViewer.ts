import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ViewerMixin } from '../lib/Viewer';
import { SingleViewerMixin } from '../lib/SingleViewer';

export const SingleViewerBundle = [
  ViewerMixin as Mixin,
  SingleViewerMixin as Mixin];
