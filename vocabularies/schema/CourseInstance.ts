import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface CourseInstance extends Schema.Event, RdfResource {
  courseMode: string;
  courseModeTerm: RDF.NamedNode;
  instructor: Schema.Person;
}

export function CourseInstanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourseInstanceClass extends EventMixin(Resource) implements CourseInstance {
    @property.literal()
    courseMode!: string;
    @property({ path: schema.courseMode })
    courseModeTerm!: RDF.NamedNode;
    @property.resource()
    instructor!: Schema.Person;
  }
  return CourseInstanceClass
}

class CourseInstanceImpl extends CourseInstanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CourseInstance>) {
    super(arg, init)
    this.types.add(schema.CourseInstance)
  }

  static readonly __mixins: Mixin[] = [CourseInstanceMixin, EventMixin];
}
CourseInstanceMixin.appliesTo = schema.CourseInstance
CourseInstanceMixin.Class = CourseInstanceImpl
