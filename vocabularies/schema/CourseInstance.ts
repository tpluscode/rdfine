import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface CourseInstance extends Schema.Event, RdfResource {
  courseMode: rdf.Term;
  courseModeLiteral: string;
  instructor: Schema.Person;
}

export default function CourseInstanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseInstanceClass extends EventMixin(Resource) implements CourseInstance {
    @property()
    courseMode!: rdf.Term;
    @property.literal({ path: schema.courseMode })
    courseModeLiteral!: string;
    @property.resource()
    instructor!: Schema.Person;
  }
  return CourseInstanceClass
}

class CourseInstanceImpl extends CourseInstanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CourseInstance>) {
    super(arg)
    this.types.add(schema.CourseInstance)
    initializeProperties<CourseInstance>(this, init)
  }
}
CourseInstanceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CourseInstance)
CourseInstanceMixin.Class = CourseInstanceImpl
