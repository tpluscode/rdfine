import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface DigitalDocumentPermission extends Schema.Intangible, RdfResource {
  grantee: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  permissionType: Schema.DigitalDocumentPermissionType;
}

export default function DigitalDocumentPermissionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DigitalDocumentPermissionClass extends IntangibleMixin(Resource) implements DigitalDocumentPermission {
    @property.resource()
    grantee!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
    @property()
    permissionType!: Schema.DigitalDocumentPermissionType;
  }
  return DigitalDocumentPermissionClass
}

class DigitalDocumentPermissionImpl extends DigitalDocumentPermissionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DigitalDocumentPermission>) {
    super(arg, init)
    this.types.add(schema.DigitalDocumentPermission)
  }
}
DigitalDocumentPermissionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DigitalDocumentPermission)
DigitalDocumentPermissionMixin.Class = DigitalDocumentPermissionImpl
