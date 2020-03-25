import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Course extends Schema.CreativeWork, RdfResource {
  courseCode: string;
  coursePrerequisites: Schema.AlignmentObject | Course;
  coursePrerequisitesLiteral: string;
  educationalCredentialAwarded: rdf.Term;
  educationalCredentialAwardedLiteral: string;
  hasCourseInstance: Schema.CourseInstance;
}

export default function CourseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseClass extends CreativeWorkMixin(Resource) implements Course {
    @property.literal()
    courseCode!: string;
    @property.resource()
    coursePrerequisites!: Schema.AlignmentObject | Course;
    @property.literal({ path: schema.coursePrerequisites })
    coursePrerequisitesLiteral!: string;
    @property()
    educationalCredentialAwarded!: rdf.Term;
    @property.literal({ path: schema.educationalCredentialAwarded })
    educationalCredentialAwardedLiteral!: string;
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
