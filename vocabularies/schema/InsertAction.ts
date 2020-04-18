import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AddActionMixin from './AddAction';

export interface InsertAction extends Schema.AddAction, RdfResource {
  toLocation: Schema.Place;
}

export default function InsertActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InsertActionClass extends AddActionMixin(Resource) implements InsertAction {
    @property.resource()
    toLocation!: Schema.Place;
  }
  return InsertActionClass
}

class InsertActionImpl extends InsertActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InsertAction>) {
    super(arg, init)
    this.types.add(schema.InsertAction)
  }
}
InsertActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InsertAction)
InsertActionMixin.Class = InsertActionImpl
