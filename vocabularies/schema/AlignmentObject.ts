import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface AlignmentObject extends Schema.Intangible, RdfResource {
  alignmentType: string;
  educationalFramework: string;
  targetDescription: string;
  targetName: string;
  targetUrl: rdf.Term;
}

export default function AlignmentObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AlignmentObjectClass extends IntangibleMixin(Resource) implements AlignmentObject {
    @property.literal()
    alignmentType!: string;
    @property.literal()
    educationalFramework!: string;
    @property.literal()
    targetDescription!: string;
    @property.literal()
    targetName!: string;
    @property()
    targetUrl!: rdf.Term;
  }
  return AlignmentObjectClass
}

class AlignmentObjectImpl extends AlignmentObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AlignmentObject>) {
    super(arg)
    this.types.add(schema.AlignmentObject)
    initializeProperties<AlignmentObject>(this, init)
  }
}
AlignmentObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AlignmentObject)
AlignmentObjectMixin.Class = AlignmentObjectImpl
