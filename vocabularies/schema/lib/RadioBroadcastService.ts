import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BroadcastServiceMixin } from './BroadcastService';

export interface RadioBroadcastService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BroadcastService<D>, RdfResource<D> {
}

export function RadioBroadcastServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadioBroadcastService> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadioBroadcastServiceClass extends BroadcastServiceMixin(Resource) implements Partial<RadioBroadcastService> {
  }
  return RadioBroadcastServiceClass
}

class RadioBroadcastServiceImpl extends RadioBroadcastServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioBroadcastService>) {
    super(arg, init)
    this.types.add(schema.RadioBroadcastService)
  }

  static readonly __mixins: Mixin[] = [RadioBroadcastServiceMixin, BroadcastServiceMixin];
}
RadioBroadcastServiceMixin.appliesTo = schema.RadioBroadcastService
RadioBroadcastServiceMixin.Class = RadioBroadcastServiceImpl
