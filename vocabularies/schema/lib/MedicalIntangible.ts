import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalIntangible<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
}

export function MedicalIntangibleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalIntangible> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalIntangibleClass extends MedicalEntityMixin(Resource) implements Partial<MedicalIntangible> {
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

export const fromPointer = createFactory<MedicalIntangible>([MedicalEntityMixin, MedicalIntangibleMixin], { types: [schema.MedicalIntangible] });
