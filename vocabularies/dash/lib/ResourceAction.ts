import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ActionMixin } from './Action';

export interface ResourceAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Action<D>, RdfResource<D> {
}

export function ResourceActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
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
