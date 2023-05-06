import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AnatomicalStructureMixin } from './AnatomicalStructure.js';

export interface Ligament<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
}

export function LigamentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Ligament> & RdfResourceCore> & Base {
  @namespace(schema)
  class LigamentClass extends AnatomicalStructureMixin(Resource) implements Partial<Ligament> {
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

export const fromPointer = createFactory<Ligament>([AnatomicalStructureMixin, LigamentMixin], { types: [schema.Ligament] });
