import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface PerformingArtsTheater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function PerformingArtsTheaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PerformingArtsTheater> & RdfResourceCore> & Base {
  @namespace(schema)
  class PerformingArtsTheaterClass extends CivicStructureMixin(Resource) implements Partial<PerformingArtsTheater> {
  }
  return PerformingArtsTheaterClass
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
