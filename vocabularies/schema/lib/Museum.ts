import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Museum<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function MuseumMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Museum & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MuseumClass extends CivicStructureMixin(Resource) {
  }
  return MuseumClass as any
}

class MuseumImpl extends MuseumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Museum>) {
    super(arg, init)
    this.types.add(schema.Museum)
  }

  static readonly __mixins: Mixin[] = [MuseumMixin, CivicStructureMixin];
}
MuseumMixin.appliesTo = schema.Museum
MuseumMixin.Class = MuseumImpl

export const fromPointer = createFactory<Museum>([CivicStructureMixin, MuseumMixin], { types: [schema.Museum] });
