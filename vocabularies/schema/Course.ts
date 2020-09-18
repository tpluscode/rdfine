import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Course extends Schema.CreativeWork, RdfResource {
  courseCode: string | undefined;
  coursePrerequisites: Schema.AlignmentObject | Schema.Course | undefined;
  coursePrerequisitesLiteral: string | undefined;
  educationalCredentialAwarded: string | undefined;
  educationalCredentialAwardedTerm: RDF.NamedNode | undefined;
  hasCourseInstance: Schema.CourseInstance | undefined;
}

export function CourseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseClass extends CreativeWorkMixin(Resource) implements Course {
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
  }
  return CourseClass
}

class CourseImpl extends CourseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Course>) {
    super(arg, init)
    this.types.add(schema.Course)
  }

  static readonly __mixins: Mixin[] = [CourseMixin, CreativeWorkMixin];
}
CourseMixin.appliesTo = schema.Course
CourseMixin.Class = CourseImpl
