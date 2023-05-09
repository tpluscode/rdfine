import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BroadcastServiceMixin } from './BroadcastService.js';

export interface RadioBroadcastService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BroadcastService<D>, rdfine.RdfResource<D> {
}

export function RadioBroadcastServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RadioBroadcastService> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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

export const fromPointer = createFactory<RadioBroadcastService>([BroadcastServiceMixin, RadioBroadcastServiceMixin], { types: [schema.RadioBroadcastService] });
