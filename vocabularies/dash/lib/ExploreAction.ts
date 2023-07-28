import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ResourceActionMixin } from './ResourceAction.js';

export interface ExploreAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ResourceAction<D>, rdfine.RdfResource<D> {
}

export function ExploreActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ExploreAction & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ExploreActionClass extends ResourceActionMixin(Resource) {
  }
  return ExploreActionClass as any
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

export const fromPointer = createFactory<ExploreAction>([ResourceActionMixin, ExploreActionMixin], { types: [dash.ExploreAction] });
