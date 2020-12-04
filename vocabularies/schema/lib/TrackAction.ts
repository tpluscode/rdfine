import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FindActionMixin } from './FindAction';

export interface TrackAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
}

export function TrackActionMixin<Base extends Constructor>(Resource: Base): Constructor<TrackAction> & Base {
  @namespace(schema)
  class TrackActionClass extends FindActionMixin(Resource) implements TrackAction {
    @property()
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
