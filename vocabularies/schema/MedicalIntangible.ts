import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalIntangible<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
}

export function MedicalIntangibleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalIntangibleClass extends MedicalEntityMixin(Resource) implements MedicalIntangible {
  }
  return MedicalIntangibleClass
}

class MedicalIntangibleImpl extends MedicalIntangibleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalIntangible>) {
    super(arg, init)
    this.types.add(schema.MedicalIntangible)
  }

  static readonly __mixins: Mixin[] = [MedicalIntangibleMixin, MedicalEntityMixin];
}
MedicalIntangibleMixin.appliesTo = schema.MedicalIntangible
MedicalIntangibleMixin.Class = MedicalIntangibleImpl