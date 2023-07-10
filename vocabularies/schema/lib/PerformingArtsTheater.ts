import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface PerformingArtsTheater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function PerformingArtsTheaterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PerformingArtsTheater & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PerformingArtsTheaterClass extends CivicStructureMixin(Resource) {
  }
  return PerformingArtsTheaterClass as any
}

class PerformingArtsTheaterImpl extends PerformingArtsTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformingArtsTheater>) {
    super(arg, init)
    this.types.add(schema.PerformingArtsTheater)
  }

  static readonly __mixins: Mixin[] = [PerformingArtsTheaterMixin, CivicStructureMixin];
}
PerformingArtsTheaterMixin.appliesTo = schema.PerformingArtsTheater
PerformingArtsTheaterMixin.Class = PerformingArtsTheaterImpl

export const fromPointer = createFactory<PerformingArtsTheater>([CivicStructureMixin, PerformingArtsTheaterMixin], { types: [schema.PerformingArtsTheater] });
