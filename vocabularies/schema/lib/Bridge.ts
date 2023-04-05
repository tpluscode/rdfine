import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Bridge<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function BridgeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Bridge> & RdfResourceCore> & Base {
  @namespace(schema)
  class BridgeClass extends CivicStructureMixin(Resource) implements Partial<Bridge> {
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

export const fromPointer = createFactory<Bridge>([CivicStructureMixin, BridgeMixin], { types: [schema.Bridge] });
