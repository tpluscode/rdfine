import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface BoatTerminal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function BoatTerminalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BoatTerminal> & RdfResourceCore> & Base {
  @namespace(schema)
  class BoatTerminalClass extends CivicStructureMixin(Resource) implements Partial<BoatTerminal> {
  }
  return BoatTerminalClass
}

class BoatTerminalImpl extends BoatTerminalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BoatTerminal>) {
    super(arg, init)
    this.types.add(schema.BoatTerminal)
  }

  static readonly __mixins: Mixin[] = [BoatTerminalMixin, CivicStructureMixin];
}
BoatTerminalMixin.appliesTo = schema.BoatTerminal
BoatTerminalMixin.Class = BoatTerminalImpl

export const fromPointer = createFactory<BoatTerminal>([CivicStructureMixin, BoatTerminalMixin], { types: [schema.BoatTerminal] });
