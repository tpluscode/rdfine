import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface Continent extends Schema.Landform, RdfResource {
}

export default function ContinentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContinentClass extends LandformMixin(Resource) implements Continent {
  }
  return ContinentClass
}

class ContinentImpl extends ContinentMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Continent)
  }
}
ContinentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Continent)
ContinentMixin.Class = ContinentImpl
