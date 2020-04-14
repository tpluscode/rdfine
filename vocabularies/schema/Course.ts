import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Course extends Schema.CreativeWork, RdfResource {
  courseCode: string;
  coursePrerequisites: Schema.AlignmentObject | Schema.Course;
  coursePrerequisitesLiteral: string;
  educationalCredentialAwarded: string;
  educationalCredentialAwardedTerm: RDF.NamedNode;
  hasCourseInstance: Schema.CourseInstance;
}

export default function CourseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseClass extends CreativeWorkMixin(Resource) implements Course {
    @property.literal()
    courseCode!: string;
    @property.resource()
    coursePrerequisites!: Schema.AlignmentObject | Schema.Course;
    @property.literal({ path: schema.coursePrerequisites })
    coursePrerequisitesLiteral!: string;
    @property.literal()
    educationalCredentialAwarded!: string;
    @property({ path: schema.educationalCredentialAwarded })
    educationalCredentialAwardedTerm!: RDF.NamedNode;
    @property.resource()
    hasCourseInstance!: Schema.CourseInstance;
  }
  return CourseClass
}

class CourseImpl extends CourseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Course>) {
    super(arg, init)
    this.types.add(schema.Course)
  }
}
CourseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Course)
CourseMixin.Class = CourseImpl
