import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface CivicStructure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  openingHours: string | undefined;
}

export function CivicStructureMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CivicStructure> & RdfResourceCore> & Base {
  @namespace(schema)
  class CivicStructureClass extends PlaceMixin(Resource) implements Partial<CivicStructure> {
    @property.literal()
    openingHours: string | undefined;
  }
  return CivicStructureClass
}

class CivicStructureImpl extends CivicStructureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CivicStructure>) {
    super(arg, init)
    this.types.add(schema.CivicStructure)
  }

  static readonly __mixins: Mixin[] = [CivicStructureMixin, PlaceMixin];
}
CivicStructureMixin.appliesTo = schema.CivicStructure
CivicStructureMixin.Class = CivicStructureImpl

export const fromPointer = createFactory<CivicStructure>([PlaceMixin, CivicStructureMixin], { types: [schema.CivicStructure] });
