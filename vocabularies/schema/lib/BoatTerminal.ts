import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface BoatTerminal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function BoatTerminalMixin<Base extends Constructor>(Resource: Base): Constructor<BoatTerminal> & Base {
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
