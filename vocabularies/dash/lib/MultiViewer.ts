import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ViewerMixin } from './Viewer';

export interface MultiViewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Viewer<D>, RdfResource<D> {
}

export function MultiViewerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class MultiViewerClass extends ViewerMixin(Resource) implements MultiViewer {
  }
  return MultiViewerClass
}

class MultiViewerImpl extends MultiViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MultiViewer>) {
    super(arg, init)
    this.types.add(dash.MultiViewer)
  }

  static readonly __mixins: Mixin[] = [MultiViewerMixin, ViewerMixin];
}
MultiViewerMixin.appliesTo = dash.MultiViewer
MultiViewerMixin.Class = MultiViewerImpl
