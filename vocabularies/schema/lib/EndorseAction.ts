import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface EndorseAction<ID extends ResourceNode = ResourceNode> extends Schema.ReactAction<ID>, RdfResource<ID> {
  endorsee: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function EndorseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EndorseActionClass extends ReactActionMixin(Resource) implements EndorseAction {
    @property.resource()
    endorsee: Schema.Organization | Schema.Person | undefined;
  }
  return EndorseActionClass
}

class EndorseActionImpl extends EndorseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EndorseAction>) {
    super(arg, init)
    this.types.add(schema.EndorseAction)
  }

  static readonly __mixins: Mixin[] = [EndorseActionMixin, ReactActionMixin];
}
EndorseActionMixin.appliesTo = schema.EndorseAction
EndorseActionMixin.Class = EndorseActionImpl
