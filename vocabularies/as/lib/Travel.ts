import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { IntransitiveActivityMixin } from './IntransitiveActivity';

export interface Travel<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.IntransitiveActivity<D>, RdfResource<D> {
}

export function TravelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Travel> & RdfResourceCore> & Base {
  @namespace(as)
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
