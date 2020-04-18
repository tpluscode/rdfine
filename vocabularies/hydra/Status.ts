import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import ResourceMixin from './Resource';

export interface Status extends Hydra.Resource, RdfResource {
  description: string;
  statusCode: number;
  title: string;
}

export default function StatusMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class StatusClass extends ResourceMixin(Resource) implements Status {
    @property.literal()
    description!: string;
    @property.literal({ type: Number })
    statusCode!: number;
    @property.literal()
    title!: string;
  }
  return StatusClass
}

class StatusImpl extends StatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Status>) {
    super(arg, init)
    this.types.add(hydra.Status)
  }
}
StatusMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.Status)
StatusMixin.Class = StatusImpl