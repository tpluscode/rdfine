import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalIndication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
}

export function MedicalIndicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalIndication> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalIndicationClass extends MedicalEntityMixin(Resource) implements Partial<MedicalIndication> {
  }
  return MedicalIndicationClass
}

class MedicalIndicationImpl extends MedicalIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalIndication>) {
    super(arg, init)
    this.types.add(schema.MedicalIndication)
  }

  static readonly __mixins: Mixin[] = [MedicalIndicationMixin, MedicalEntityMixin];
}
MedicalIndicationMixin.appliesTo = schema.MedicalIndication
MedicalIndicationMixin.Class = MedicalIndicationImpl
