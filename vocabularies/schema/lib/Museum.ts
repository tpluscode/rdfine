import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Museum<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function MuseumMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Museum> & RdfResourceCore> & Base {
  @namespace(schema)
  class MuseumClass extends CivicStructureMixin(Resource) implements Partial<Museum> {
  }
  return MuseumClass
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
