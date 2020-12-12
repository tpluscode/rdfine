import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Park<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function ParkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Park> & RdfResourceCore> & Base {
  @namespace(schema)
  class ParkClass extends CivicStructureMixin(Resource) implements Partial<Park> {
  }
  return ParkClass
}

class ParkImpl extends ParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Park>) {
    super(arg, init)
    this.types.add(schema.Park)
  }

  static readonly __mixins: Mixin[] = [ParkMixin, CivicStructureMixin];
}
ParkMixin.appliesTo = schema.Park
ParkMixin.Class = ParkImpl

export const fromPointer = createFactory<Park>([CivicStructureMixin, ParkMixin], { types: [schema.Park] });
