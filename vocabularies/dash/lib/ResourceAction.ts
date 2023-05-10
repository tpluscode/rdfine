import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ActionMixin } from './Action.js';

export interface ResourceAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Action<D>, rdfine.RdfResource<D> {
}

export function ResourceActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ResourceAction> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ResourceActionClass extends ActionMixin(Resource) implements Partial<ResourceAction> {
  }
  return ResourceActionClass
}

class ResourceActionImpl extends ResourceActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResourceAction>) {
    super(arg, init)
    this.types.add(dash.ResourceAction)
  }

  static readonly __mixins: Mixin[] = [ResourceActionMixin, ActionMixin];
}
ResourceActionMixin.appliesTo = dash.ResourceAction
ResourceActionMixin.Class = ResourceActionImpl

export const fromPointer = createFactory<ResourceAction>([ActionMixin, ResourceActionMixin], { types: [dash.ResourceAction] });
