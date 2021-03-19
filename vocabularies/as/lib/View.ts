import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface View<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function ViewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<View> & RdfResourceCore> & Base {
  @namespace(as)
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
