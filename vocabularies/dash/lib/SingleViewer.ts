import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ViewerMixin } from './Viewer';

export interface SingleViewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Viewer<D>, RdfResource<D> {
}

export function SingleViewerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SingleViewer> & RdfResourceCore> & Base {
  @namespace(dash)
  class SingleViewerClass extends ViewerMixin(Resource) implements Partial<SingleViewer> {
  }
  return SingleViewerClass
}

class SingleViewerImpl extends SingleViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleViewer>) {
    super(arg, init)
    this.types.add(dash.SingleViewer)
  }

  static readonly __mixins: Mixin[] = [SingleViewerMixin, ViewerMixin];
}
SingleViewerMixin.appliesTo = dash.SingleViewer
SingleViewerMixin.Class = SingleViewerImpl

export const fromPointer = createFactory<SingleViewer>([ViewerMixin, SingleViewerMixin], { types: [dash.SingleViewer] });
