import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MultiViewerMixin } from '../lib/MultiViewer';
import { ViewerMixin } from '../lib/Viewer';

export const MultiViewerBundle = [
  MultiViewerMixin as Mixin,
  ViewerMixin as Mixin];
