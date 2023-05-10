import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface TaxiStand<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function TaxiStandMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TaxiStand> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TaxiStandClass extends CivicStructureMixin(Resource) implements Partial<TaxiStand> {
  }
  return TaxiStandClass
}

class TaxiStandImpl extends TaxiStandMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TaxiStand>) {
    super(arg, init)
    this.types.add(schema.TaxiStand)
  }

  static readonly __mixins: Mixin[] = [TaxiStandMixin, CivicStructureMixin];
}
TaxiStandMixin.appliesTo = schema.TaxiStand
TaxiStandMixin.Class = TaxiStandImpl

export const fromPointer = createFactory<TaxiStand>([CivicStructureMixin, TaxiStandMixin], { types: [schema.TaxiStand] });
