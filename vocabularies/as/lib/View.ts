import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface View<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function ViewMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<View> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ViewClass extends ActivityMixin(Resource) implements Partial<View> {
  }
  return ViewClass
}

class ViewImpl extends ViewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<View>) {
    super(arg, init)
    this.types.add(as.View)
  }

  static readonly __mixins: Mixin[] = [ViewMixin, ActivityMixin];
}
ViewMixin.appliesTo = as.View
ViewMixin.Class = ViewImpl

export const fromPointer = createFactory<View>([ActivityMixin, ViewMixin], { types: [as.View] });
