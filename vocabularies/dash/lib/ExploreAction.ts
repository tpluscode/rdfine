import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ResourceActionMixin } from './ResourceAction';

export interface ExploreAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ResourceAction<D>, RdfResource<D> {
}

export function ExploreActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ExploreActionClass extends ResourceActionMixin(Resource) implements ExploreAction {
  }
  return ExploreActionClass
}

class ExploreActionImpl extends ExploreActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExploreAction>) {
    super(arg, init)
    this.types.add(dash.ExploreAction)
  }

  static readonly __mixins: Mixin[] = [ExploreActionMixin, ResourceActionMixin];
}
ExploreActionMixin.appliesTo = dash.ExploreAction
ExploreActionMixin.Class = ExploreActionImpl
