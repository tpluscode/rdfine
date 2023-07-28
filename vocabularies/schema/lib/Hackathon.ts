import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface Hackathon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function HackathonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Hackathon & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HackathonClass extends EventMixin(Resource) {
  }
  return HackathonClass as any
}

class HackathonImpl extends HackathonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hackathon>) {
    super(arg, init)
    this.types.add(schema.Hackathon)
  }

  static readonly __mixins: Mixin[] = [HackathonMixin, EventMixin];
}
HackathonMixin.appliesTo = schema.Hackathon
HackathonMixin.Class = HackathonImpl

export const fromPointer = createFactory<Hackathon>([EventMixin, HackathonMixin], { types: [schema.Hackathon] });
