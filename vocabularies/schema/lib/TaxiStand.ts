import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface TaxiStand<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function TaxiStandMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiStandClass extends CivicStructureMixin(Resource) implements TaxiStand {
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
