import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Ligament<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
}

export function LigamentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LigamentClass extends AnatomicalStructureMixin(Resource) implements Ligament {
  }
  return LigamentClass
}

class LigamentImpl extends LigamentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Ligament>) {
    super(arg, init)
    this.types.add(schema.Ligament)
  }

  static readonly __mixins: Mixin[] = [LigamentMixin, AnatomicalStructureMixin];
}
LigamentMixin.appliesTo = schema.Ligament
LigamentMixin.Class = LigamentImpl
