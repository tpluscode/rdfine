import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { IntransitiveActivityMixin } from './IntransitiveActivity.js';

export interface Travel<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.IntransitiveActivity<D>, rdfine.RdfResource<D> {
}

export function TravelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Travel> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class TravelClass extends IntransitiveActivityMixin(Resource) implements Partial<Travel> {
  }
  return TravelClass
}

class TravelImpl extends TravelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Travel>) {
    super(arg, init)
    this.types.add(as.Travel)
  }

  static readonly __mixins: Mixin[] = [TravelMixin, IntransitiveActivityMixin];
}
TravelMixin.appliesTo = as.Travel
TravelMixin.Class = TravelImpl

export const fromPointer = createFactory<Travel>([IntransitiveActivityMixin, TravelMixin], { types: [as.Travel] });
