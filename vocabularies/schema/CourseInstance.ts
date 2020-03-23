import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface CourseInstance extends Schema.Event, RdfResource {
  courseMode: string | string;
  instructor: Schema.Person;
}

export default function CourseInstanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseInstanceClass extends EventMixin(Resource) implements CourseInstance {
    @property.literal()
    courseMode!: string | string;
    @property.resource()
    instructor!: Schema.Person;
  }
  return CourseInstanceClass
}

class CourseInstanceImpl extends CourseInstanceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CourseInstance)
  }
}
CourseInstanceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CourseInstance)
CourseInstanceMixin.Class = CourseInstanceImpl
