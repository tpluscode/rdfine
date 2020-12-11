import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { WidgetMixin } from './Widget';

export interface Viewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Widget<D>, RdfResource<D> {
}

export function ViewerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ViewerClass extends WidgetMixin(Resource) implements Partial<Viewer> {
  }
  return ViewerClass
}

class ViewerImpl extends ViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Viewer>) {
    super(arg, init)
    this.types.add(dash.Viewer)
  }

  static readonly __mixins: Mixin[] = [ViewerMixin, WidgetMixin];
}
ViewerMixin.appliesTo = dash.Viewer
ViewerMixin.Class = ViewerImpl
