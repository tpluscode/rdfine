import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface Action extends Schema.Thing, RdfResource {
  actionStatus: Schema.ActionStatusType | undefined;
  agent: Schema.Organization | Schema.Person | undefined;
  endTime: Date | undefined;
  error: Schema.Thing | undefined;
  instrument: Schema.Thing | undefined;
  location: Schema.Place | Schema.PostalAddress | undefined;
  locationLiteral: string | undefined;
  object: Schema.Thing | undefined;
  participant: Schema.Organization | Schema.Person | undefined;
  result: Schema.Thing | undefined;
  startTime: Date | undefined;
  target: Schema.EntryPoint | undefined;
}

export function ActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActionClass extends ThingMixin(Resource) implements Action {
    @property()
    actionStatus: Schema.ActionStatusType | undefined;
    @property.resource()
    agent: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime: Date | undefined;
    @property.resource()
    error: Schema.Thing | undefined;
    @property.resource()
    instrument: Schema.Thing | undefined;
    @property.resource()
    location: Schema.Place | Schema.PostalAddress | undefined;
    @property.literal({ path: schema.location })
    locationLiteral: string | undefined;
    @property.resource()
    object: Schema.Thing | undefined;
    @property.resource()
    participant: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    result: Schema.Thing | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime: Date | undefined;
    @property.resource()
    target: Schema.EntryPoint | undefined;
  }
  return ActionClass
}

class ActionImpl extends ActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Action>) {
    super(arg, init)
    this.types.add(schema.Action)
  }

  static readonly __mixins: Mixin[] = [ActionMixin, ThingMixin];
}
ActionMixin.appliesTo = schema.Action
ActionMixin.Class = ActionImpl
