import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface BrainStructure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
}

export function BrainStructureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BrainStructureClass extends AnatomicalStructureMixin(Resource) implements BrainStructure {
  }
  return BrainStructureClass
}

class BrainStructureImpl extends BrainStructureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BrainStructure>) {
    super(arg, init)
    this.types.add(schema.BrainStructure)
  }

  static readonly __mixins: Mixin[] = [BrainStructureMixin, AnatomicalStructureMixin];
}
BrainStructureMixin.appliesTo = schema.BrainStructure
BrainStructureMixin.Class = BrainStructureImpl
