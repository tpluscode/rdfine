import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface Hackathon<ID extends ResourceNode = ResourceNode> extends Schema.Event<ID>, RdfResource<ID> {
}

export function HackathonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HackathonClass extends EventMixin(Resource) implements Hackathon {
  }
  return HackathonClass
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
