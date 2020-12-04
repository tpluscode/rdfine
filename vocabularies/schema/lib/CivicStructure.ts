import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface CivicStructure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  openingHours: string | undefined;
}

export function CivicStructureMixin<Base extends Constructor>(Resource: Base): Constructor<CivicStructure> & Base {
  @namespace(schema)
  class CivicStructureClass extends PlaceMixin(Resource) implements CivicStructure {
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
