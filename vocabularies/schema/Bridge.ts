import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Bridge extends Schema.CivicStructure, RdfResource {
}

export function BridgeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BridgeClass extends CivicStructureMixin(Resource) implements Bridge {
  }
  return BridgeClass
}

class BridgeImpl extends BridgeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bridge>) {
    super(arg, init)
    this.types.add(schema.Bridge)
  }

  static readonly __mixins: Mixin[] = [BridgeMixin, CivicStructureMixin];
}
BridgeMixin.appliesTo = schema.Bridge
BridgeMixin.Class = BridgeImpl
