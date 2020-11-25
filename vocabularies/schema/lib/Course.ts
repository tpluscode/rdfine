import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { LearningResourceMixin } from './LearningResource';

export interface Course<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, Schema.LearningResource<ID>, RdfResource<ID> {
  courseCode: string | undefined;
  coursePrerequisites: Schema.AlignmentObject<SiblingNode<ID>> | Schema.Course<SiblingNode<ID>> | undefined;
  coursePrerequisitesLiteral: string | undefined;
  educationalCredentialAwarded: string | undefined;
  educationalCredentialAwardedTerm: RDF.NamedNode | undefined;
  hasCourseInstance: Schema.CourseInstance<SiblingNode<ID>> | undefined;
  numberOfCredits: Schema.StructuredValue<SiblingNode<ID>> | undefined;
  numberOfCreditsLiteral: number | undefined;
  occupationalCredentialAwarded: string | undefined;
  occupationalCredentialAwardedTerm: RDF.NamedNode | undefined;
}

export function CourseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseClass extends LearningResourceMixin(CreativeWorkMixin(Resource)) implements Course {
    @property.literal()
    courseCode: string | undefined;
    @property.resource()
    coursePrerequisites: Schema.AlignmentObject | Schema.Course | undefined;
    @property.literal({ path: schema.coursePrerequisites })
    coursePrerequisitesLiteral: string | undefined;
    @property.literal()
    educationalCredentialAwarded: string | undefined;
    @property({ path: schema.educationalCredentialAwarded })
    educationalCredentialAwardedTerm: RDF.NamedNode | undefined;
    @property.resource()
    hasCourseInstance: Schema.CourseInstance | undefined;
    @property.resource()
    numberOfCredits: Schema.StructuredValue | undefined;
    @property.literal({ path: schema.numberOfCredits, type: Number })
    numberOfCreditsLiteral: number | undefined;
    @property.literal()
    occupationalCredentialAwarded: string | undefined;
    @property({ path: schema.occupationalCredentialAwarded })
    occupationalCredentialAwardedTerm: RDF.NamedNode | undefined;
  }
  return CourseClass
}

class CourseImpl extends CourseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Course>) {
    super(arg, init)
    this.types.add(schema.Course)
  }

  static readonly __mixins: Mixin[] = [CourseMixin, CreativeWorkMixin, LearningResourceMixin];
}
CourseMixin.appliesTo = schema.Course
CourseMixin.Class = CourseImpl
