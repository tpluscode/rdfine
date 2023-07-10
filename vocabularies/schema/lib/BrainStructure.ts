import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AnatomicalStructureMixin } from './AnatomicalStructure.js';

export interface BrainStructure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, rdfine.RdfResource<D> {
}

export function BrainStructureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BrainStructure & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BrainStructureClass extends AnatomicalStructureMixin(Resource) {
  }
  return BrainStructureClass as any
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

export const fromPointer = createFactory<BrainStructure>([AnatomicalStructureMixin, BrainStructureMixin], { types: [schema.BrainStructure] });
