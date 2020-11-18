import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalGuideline<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  evidenceLevel: Schema.MedicalEvidenceLevel | undefined;
  evidenceOrigin: string | undefined;
  guidelineDate: Date | undefined;
  guidelineSubject: Schema.MedicalEntity<D> | undefined;
}

export function MedicalGuidelineMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalGuidelineClass extends MedicalEntityMixin(Resource) implements MedicalGuideline {
    @property()
    evidenceLevel: Schema.MedicalEvidenceLevel | undefined;
    @property.literal()
    evidenceOrigin: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    guidelineDate: Date | undefined;
    @property.resource()
    guidelineSubject: Schema.MedicalEntity | undefined;
  }
  return MedicalGuidelineClass
}

class MedicalGuidelineImpl extends MedicalGuidelineMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalGuideline>) {
    super(arg, init)
    this.types.add(schema.MedicalGuideline)
  }

  static readonly __mixins: Mixin[] = [MedicalGuidelineMixin, MedicalEntityMixin];
}
MedicalGuidelineMixin.appliesTo = schema.MedicalGuideline
MedicalGuidelineMixin.Class = MedicalGuidelineImpl
