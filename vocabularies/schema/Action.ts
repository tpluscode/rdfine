import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Action extends Schema.Thing, RdfResource {
  actionStatus: Schema.ActionStatusType;
  agent: Schema.Organization | Schema.Person;
  endTime: Date;
  error: Schema.Thing;
  instrument: Schema.Thing;
  location: Schema.Place | Schema.PostalAddress;
  locationLiteral: string;
  object: Schema.Thing;
  participant: Schema.Organization | Schema.Person;
  result: Schema.Thing;
  startTime: Date;
  target: Schema.EntryPoint;
}

export default function ActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActionClass extends ThingMixin(Resource) implements Action {
    @property()
    actionStatus!: Schema.ActionStatusType;
    @property.resource()
    agent!: Schema.Organization | Schema.Person;
    @property.literal()
    endTime!: Date;
    @property.resource()
    error!: Schema.Thing;
    @property.resource()
    instrument!: Schema.Thing;
    @property.resource()
    location!: Schema.Place | Schema.PostalAddress;
    @property.literal({ path: schema.location })
    locationLiteral!: string;
    @property.resource()
    object!: Schema.Thing;
    @property.resource()
    participant!: Schema.Organization | Schema.Person;
    @property.resource()
    result!: Schema.Thing;
    @property.literal()
    startTime!: Date;
    @property.resource()
    target!: Schema.EntryPoint;
  }
  return ActionClass
}

class ActionImpl extends ActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Action>) {
    super(arg, init)
    this.types.add(schema.Action)
  }
}
ActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Action)
ActionMixin.Class = ActionImpl
