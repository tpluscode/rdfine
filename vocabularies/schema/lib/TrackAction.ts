import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FindActionMixin } from './FindAction.js';

export interface TrackAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, rdfine.RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
}

export function TrackActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TrackAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TrackActionClass extends FindActionMixin(Resource) implements Partial<TrackAction> {
    @rdfine.property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
  }
  return TrackActionClass
}

class TrackActionImpl extends TrackActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TrackAction>) {
    super(arg, init)
    this.types.add(schema.TrackAction)
  }

  static readonly __mixins: Mixin[] = [TrackActionMixin, FindActionMixin];
}
TrackActionMixin.appliesTo = schema.TrackAction
TrackActionMixin.Class = TrackActionImpl

export const fromPointer = createFactory<TrackAction>([FindActionMixin, TrackActionMixin], { types: [schema.TrackAction] });
